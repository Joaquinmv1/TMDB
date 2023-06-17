import { useEffect, useState } from "react";
import { fetchMoviesByCategory } from "../services/tmdb.api";

export function useGetMovies() {
  const [movies, setMovies] = useState<any>([]);

  const getFiltersMovies = async () => {
    try {
      const res = await fetchMoviesByCategory();
      setMovies(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFiltersMovies();
  }, []);

  return { movies }
}