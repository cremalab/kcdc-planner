import { useFirebaseData } from "./useFirebaseData";
import { useLocalData } from "./useLocalData";
import { useAuth } from './useAuth';

export function useData() {
  const { user, loading: userLoading } = useAuth();
  const userId = user?.uid;
  const { handleSetSchedule, schedule: dbSchedule, loading: dbLoading} = useFirebaseData(userId);
  const { handleSetSchedule: handleSetLocalSchedule, localStorageSchedule } = useLocalData();

  function setSchedule(timestamp: string, scheduleId: string) {
    if ( userId ) {
      handleSetSchedule(timestamp, scheduleId);
    } else {
      handleSetLocalSchedule(timestamp, scheduleId);
    }
  }

  return {
    isLoading: userLoading || dbLoading,
    scheduleData: userId ? dbSchedule : localStorageSchedule,
    setSchedule,
  }
}