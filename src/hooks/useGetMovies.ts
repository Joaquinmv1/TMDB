import { useEffect, useState } from "react";
import { fetchMoviesByCategory } from "../services/tmdb.api";
import { Movie } from "../models/types";

export function useGetMovies() {
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getFiltersMovies = async () => {
    try {
      const res = await fetchMoviesByCategory();
      setMovies(res);
      setIsLoading(true)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFiltersMovies();
  }, []);

  return { movies, isLoading };
}