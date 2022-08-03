import { format } from "date-fns";
import { useEffect, useMemo, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { normalizeSessions } from "./common";
import { ScheduleState, SessionizeResponse } from "./types";
import axios from "axios";

const SESSION_URL = 'https://sessionize.com/api/v2/9kkhtmmg/view/Sessions'

export function useData() {
  const [schedule, setSchedule, { removeItem }] =
    useLocalStorageState<ScheduleState>("schedule", {});
  const cacheDate = format(new Date(), "Mdyhaaaaa");
  const [isLoading, setIsLoading] = useState(false);
  const [payload, setPayload] = useLocalStorageState<SessionizeResponse[] | undefined>(SESSION_URL);

  useEffect(() => {
    const sessionCacheDate = localStorage.getItem("sessionCacheDate");
    if ( cacheDate != sessionCacheDate || !payload) {
      setIsLoading(true);
      axios.get<SessionizeResponse[]>(SESSION_URL).then(({ data }) => {
        setIsLoading(false);
        setPayload(data);
      })
      localStorage.setItem("sessionCacheDate", cacheDate)
    }
  }, [])
  
  const sourceData = useMemo(() => {
    return payload ? normalizeSessions(payload) : undefined;
  }, [payload]);

  return {
    sourceData,
    isLoading,
    resetSchedule: () => removeItem(),
    scheduleData: schedule,
    days: sourceData ? Object.keys(sourceData) : [],
    setSchedule: (timestamp: string, scheduleId: string) => {
      setSchedule((state) => {
        state[`${timestamp}`] = scheduleId;
        return state;
      });
    },
  }
}