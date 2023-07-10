import { Carrousel, ComingSoon } from "..";
import { HeroImage } from "./HeroSlide/HeroImage";
import { useQuery } from 'react-query'
import { fetchMoviesByCategory } from "../../services/tmdb.api";

export const Home = () => {
  const { data: movies, isError } = useQuery('carrousel', fetchMoviesByCategory);
 
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