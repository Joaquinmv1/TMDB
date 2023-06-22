import { categoriesCarrousel } from "../../../constants/images";
import { Movie } from "../../../models/types";
import { Carrousel } from "./Carrousel";

interface CarrouselProps {
  movies: Array<Movie>
  isLoading: boolean
}

export const CarrouselRender = ({ movies }: CarrouselProps) => {
  return (
    <>
      <div>
        {categoriesCarrousel.map((category) => {
          const categoryMovies = movies.filter((movie: Movie) => movie.category === category);
          return (
            <Carrousel key={category} category={category} movies={categoryMovies} />
          );
        })}
      </div>
    </>
  )
}