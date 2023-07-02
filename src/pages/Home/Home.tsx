import { CarrouselRender } from "..";
import { HeroSlide } from "./HeroSlide/HeroImage";
import { useGetMovies } from "../../hooks";

export const Home = () => {
  const { movies, isLoading } = useGetMovies();

  return (
    <>
      <HeroSlide />
      <CarrouselRender movies={movies} isLoading={isLoading} />
    </>
  )
}