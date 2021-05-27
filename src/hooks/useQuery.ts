import { useCallback, useEffect, useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import type { Dispatcher, Status } from "../interfaces";

type queryResponse<T> = {
  error?: AxiosError;
  status: Status;
  data?: T;
  setStatus: Dispatcher<Status>;
};

type args<T> = {
  apiCall: () => Promise<AxiosResponse<T>>;
  initialStatus?: Status;
};

export function useQuery<T>({
  apiCall,
  initialStatus = "ready",
}: args<T>): queryResponse<T> {
  const [error, setError] = useState<AxiosError | undefined>();
  const [status, setStatus] = useState<Status>(initialStatus);
  const [data, setData] = useState<T | undefined>();
  const fetcher = useCallback(apiCall, [apiCall]);

  useEffect(() => {
    setStatus("loading");

    fetcher()
      .then((results) => {
        setData(results.data as T)
        setStatus("loaded");
      })
      .catch((error) => {
        setError(error);
      });

  }, [fetcher]);
  return { error, status, data, setStatus };
}
