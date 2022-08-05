import { ScheduleState } from "../types";
import { database } from './firebase';
import { ref, runTransaction, set } from "firebase/database";
import { useObject } from 'react-firebase-hooks/database';
import { mapKeys } from "lodash";

function encodeSchedule(schedule: ScheduleState) {
  return mapKeys(schedule, (_, key) => encodeURIComponent(key));
}

function decodeShedule(schedule: ScheduleState) {
  return mapKeys(schedule, (_, key) => decodeURIComponent(key));
}

export function useFirebaseData(userId?: string) {
  const userPath = `schedule/${userId}`;
  const [snapshot, loading] = useObject(ref(database, userPath));
  const scheduleSnapshot: ScheduleState | undefined | null = snapshot ? snapshot?.val() : undefined;
  const schedule = scheduleSnapshot ? decodeShedule(scheduleSnapshot) : undefined;

  function handleSetSchedule(timestamp: string, scheduleId: string) {
    set(ref(database, `schedule/${userId}/${encodeURIComponent(timestamp)}`), scheduleId);
  }

  function handleSeedData(seedSchedule: ScheduleState) {
    runTransaction(ref(database, userPath), () => encodeSchedule(seedSchedule));
  }

  return { handleSetSchedule, handleSeedData, schedule, loading }
}
