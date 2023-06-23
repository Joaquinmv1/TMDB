import { useState, useEffect } from 'react';
import { API_KEY } from '../constants/images';

interface UseProps {
  type: string | undefined;
  id: string | undefined;
}

export function useGetDetail({ type, id }: UseProps) {
  const [detail, setDetail] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`;

  const getDetailElement = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      const creditsUrl = `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${API_KEY}`;
      const creditsResponse = await fetch(creditsUrl);
      const creditsData = await creditsResponse.json();

      const videosUrl = `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${API_KEY}`;
      const videosResponse = await fetch(videosUrl);
      const videosData = await videosResponse.json();
      const trailers = videosData.results.filter((video: any) => video.type === 'Trailer');

      setIsLoading(true);

      setDetail({
        data,
        creditsData,
        trailers,
      });
    } catch (error) {
      setIsLoading(true);
    }
  };

  useEffect(() => {
    getDetailElement();
  }, []);

  return { detail, isLoading };
}
