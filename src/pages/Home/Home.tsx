import { Carrousel, ComingSoon } from "..";
import { HeroImage } from "./HeroSlide/HeroImage";
import { useGetMovies } from "../../hooks";
import { useQuery } from 'react-query'
import { fetchMoviesByCategory } from "../../services/tmdb.api";

export const Home = () => {
  const { data: movies, isError } = useQuery('carrousel', fetchMoviesByCategory);
  // const { movies, isLoading } = useGetMovies();
 
  return (
    <>
      <HeroImage />
      <Carrousel
        movies={movies}
      />
      <ComingSoon />
    </>
  )
}