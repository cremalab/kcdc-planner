import { createContext, ReactNode, useContext, useMemo } from "react";
import { useQuery } from "react-query";
import useLocalStorageState from "use-local-storage-state";
import { UpdateState } from "use-local-storage-state/src/useLocalStorageStateBase";
import { normalizeSessions } from "./common";
import { SessionizeResponse } from "./types";

const StorageContext = createContext(null);

interface ScheduleState {
  [time: string]: string;
}

interface StorageState {
  schedule?: [ScheduleState, UpdateState<ScheduleState>, () => void];
}

export function StorageProvider({ children }: { children: ReactNode }) {
  const [schedule, setSchedule, { removeItem }] = useLocalStorageState<
    ScheduleState
  >("schedule", {});

  const store: StorageState = {
    schedule: [schedule, setSchedule, removeItem]
  };

  return (
    <StorageContext.Provider value={store}>{children}</StorageContext.Provider>
  );
}

export function useStorage() {
  const { isLoading, data: payload } = useQuery<SessionizeResponse[]>(
    "repoData",
    () =>
      fetch(
        "https://sessionize.com/api/v2/dsuzu6w5/view/Sessions"
      ).then((res) => res.json())
  );
  const store = useContext(StorageContext);
  const sourceData = useMemo(() => {
    return payload ? normalizeSessions(payload) : undefined;
  }, [payload]);

  return {
    store,
    sourceData,
    isLoadingSource: isLoading,
    days: sourceData ? Object.keys(sourceData) : []
  };
}
