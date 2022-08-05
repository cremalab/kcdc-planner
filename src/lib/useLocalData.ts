import { createLocalStorageStateHook } from "use-local-storage-state";
import { ScheduleState } from "../types";

const useLocalStorage = createLocalStorageStateHook<ScheduleState>("schedule");

export function useLocalData() {
  const [localStorageSchedule, setLocalStorageSchedule, { removeItem }] =
    useLocalStorage();

  function handleSetSchedule(timestamp: string, scheduleId: string) {
    setLocalStorageSchedule((state) => {
      if ( state ) {
        state[`${timestamp}`] = scheduleId;
      } else {
        state = {
          [timestamp]: scheduleId
        }
      }
      return state;
    });
  }

  function handleResetSchedule() {
    removeItem()
  }
  
  return { localStorageSchedule, handleSetSchedule, handleResetSchedule }
}