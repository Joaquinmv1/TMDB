import { CarrouselRender } from "..";
import { useGetMovies } from "../../hooks";
import { FiHeart } from "react-icons/fi";


export const Home = () => {
  const { movies, isLoading } = useGetMovies();

  return (
    <>
      <CarrouselRender movies={movies} isLoading={isLoading} />
      
    </>
  )
}