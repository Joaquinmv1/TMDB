import { useState, useEffect } from 'react';
import { Detail } from '../models/types';

const API_KEY = 'eded4ee4b78f79328cc20b65cd4c2b94';

interface UseProps {
  type: string | undefined;
  id: string | undefined;
}

export default function useGetDetail({ type, id }: UseProps) {
  const [detail, setDetail] = useState<Detail>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`;

  const getDetailElement = async () => {
    try {
      const res = await fetch(url);
      const json = await res.json();

      const creditsUrl = `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${API_KEY}`;
      const creditsResponse = await fetch(creditsUrl);
      const creditsData = await creditsResponse.json();

      const videosUrl = `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${API_KEY}`;
      const videosResponse = await fetch(videosUrl);
      const videosData = await videosResponse.json();
      const trailers = videosData.results.filter((video: any) => video.type === 'Trailer');

      setIsLoading(true)

      setDetail({
        json,
        creditsData,
        trailers,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetailElement();
  }, []);

  return { detail, isLoading };
}
