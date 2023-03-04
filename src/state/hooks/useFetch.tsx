import { useCallback, useState } from 'react';
import { ApiResponse } from '../../core/models/apiResponse';

export interface UseFetchProps {
  data: ApiResponse | null;
  loading: boolean;
  error: Error | null;
  request: (
    url: string,
    options?: RequestInit,
  ) => Promise<{
    response: any;
    json: ApiResponse | null;
  }>;
}

const useFetch = (): UseFetchProps => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const request = useCallback(async (url: string, options?: RequestInit) => {
    let response: any;
    let json: ApiResponse | null;

    try {
      setError(null);
      setLoading(true);

      response = await fetch(url, options);
      json = await response.json();

      if (response.ok === false) throw new Error(json?.message);
    } catch (error: any) {
      json = null;
      setError(error.message);
    }

    if (json) setData(json);
    setLoading(false);
    return { response, json };
  }, []);

  return { data, loading, error, request };
};

export default useFetch;
