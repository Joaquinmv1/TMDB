import { categoriesCarrousel } from "../../../constants/const";
import { Movie } from "../../../models/types";
import { CarrouselView } from "./CarrouselView";

interface CarrouselProps {
  movies: Array<Movie> | undefined
}

export const Carrousel = ({ movies }: CarrouselProps) => {
  return (
    <>
      <section>
        {categoriesCarrousel.map((category) => {
          const categoryMovies = movies?.filter((movie: Movie) => movie.category === category);
          return (
            <CarrouselView key={category} category={category} movies={categoryMovies} />
          );
        })}
      </section>
    </>
  )
}