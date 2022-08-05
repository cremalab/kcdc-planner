import { format } from "date-fns";
import { useEffect, useMemo, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { normalizeSessions } from "./common";
import { SessionizeResponse } from "../types";
import axios from "axios";

const SESSION_URL = process.env.REACT_APP_SESSIONIZE_URL || "";

export function useSessionizeData() {
  const [payload, setPayload] = useLocalStorageState<SessionizeResponse[] | undefined>(SESSION_URL);
  const [loading, setLoading] = useState(false);
  const cacheDate = format(new Date(), "Mdyhaaaaa");

  useEffect(() => {
    const sessionCacheDate = localStorage.getItem("sessionCacheDate");
    if ( cacheDate != sessionCacheDate || !payload) {
      setLoading(true);
      axios.get<SessionizeResponse[]>(SESSION_URL).then(({ data }) => {
        setLoading(false);
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
    loading, 
    days: sourceData ? Object.keys(sourceData) : [] 
  }
}
