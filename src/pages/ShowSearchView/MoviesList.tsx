import { UlContainer } from ".";
import { Movie } from "../../models/types";
import { MoviesItem } from "./MoviesItem";
import { RotatingLines } from 'react-loader-spinner'


interface Props {
  movies: Movie[];
  moviesRef: React.RefObject<HTMLLIElement>;
}

export const MoviesList = ({ movies, moviesRef }: Props) => {
  return (
    <>
      <UlContainer>
        {movies?.map((movie: Movie, i: number) => {
          return (
            <MoviesItem key={`${movie.id} ${i}`} movie={movie} />
          )
        })}
        <li className='spinner-scroll' style={{ height: '300px' }} ref={moviesRef}>
          <RotatingLines
            strokeColor="violet"
            strokeWidth="5"
            width="96"
          />
        </li>
      </UlContainer>
    </>
  )
}