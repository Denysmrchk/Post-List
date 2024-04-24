import { useState } from 'react';

type CallbackFunctoin = () => Promise<void>;
interface FetchingResult {
  fetching: () => void;
  isLoading: boolean;
  error?: string;
}

export const useFetching = (callback: CallbackFunctoin): FetchingResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('An error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };
  return { fetching, isLoading, error };
};
