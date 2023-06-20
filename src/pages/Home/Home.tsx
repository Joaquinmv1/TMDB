import { CarrouselRender } from "../../components"
import { useGetMovies } from "../../hooks";

export const Home = () => {
  const { movies, isLoading } = useGetMovies();

  return (
    <>
      <CarrouselRender movies={movies} isLoading={isLoading} />
    </>
  )
}