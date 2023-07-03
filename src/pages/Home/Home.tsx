import { Carrousel, ComingSoon } from "..";
import { HeroImage } from "./HeroSlide/HeroImage";
import { useGetMovies } from "../../hooks";

export const Home = () => {
  const { movies, isLoading } = useGetMovies();
  
  return (
    <>
      <HeroImage />
      <Carrousel movies={movies} isLoading={isLoading} />
      {/* <ComingSoon /> */}
    </>
  )
}