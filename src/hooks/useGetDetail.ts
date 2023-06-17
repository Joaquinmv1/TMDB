import { useState, useEffect } from 'react';
const API_KEY = 'eded4ee4b78f79328cc20b65cd4c2b94';

interface UseProps {
    type:string | undefined
    id:string | undefined
}

export default function useGetDetail({ type, id }: UseProps) {
  const [detail, setDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`;

  const getDetailElement = async () => {
    try {
      const res = await fetch(url)
      const json = await res.json()
      setDetail(json) 
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDetailElement()
  }, [])

  return { detail }
}
