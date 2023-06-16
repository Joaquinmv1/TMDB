import { ContainerMovies, ContainerMoviesLi } from "./style";

const BASE_URL = 'https://image.tmdb.org/t/p/w500/';

interface Movies {
  id: number
  title: string
  poster_path: string
}

interface MoviesProps {
  movies: Array<Movies>
}

export const MoviesCard = ({ movies }: MoviesProps) => {
  return (
    <>
      <ContainerMovies>
        {movies && movies.map((movie: Movies) => {
          return (
            <ContainerMoviesLi key={movie.id}>
              <img src={`${BASE_URL}${movie.poster_path}`} alt="" />
              <h3>{movie.title}</h3>
            </ContainerMoviesLi>
          )
        })}
      </ContainerMovies>
    </>
  )
}

