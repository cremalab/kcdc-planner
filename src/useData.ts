import { useMemo } from "react";
import { useQuery } from "react-query";
import useLocalStorageState from "use-local-storage-state";
import { normalizeSessions } from "./common";
import { ScheduleState, SessionizeResponse } from "./types";


export function useData() {
  const [schedule, setSchedule, { removeItem }] =
    useLocalStorageState<ScheduleState>("schedule", {});
    const { isLoading, data: payload } = useQuery<SessionizeResponse[]>(
      "repoData",
      () =>
        fetch("https://sessionize.com/api/v2/dsuzu6w5/view/Sessions").then(
          (res) => res.json()
        )
    );
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