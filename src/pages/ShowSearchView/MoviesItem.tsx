import { AiTwotoneStar } from "react-icons/ai"
import { BASE_URL } from "../../constants/const"
import { Movie } from "../../models/types"

interface Props {
  movie: Movie
}

export const MoviesItem = ({ movie }: Props) => {
  return (
    <>
      <li>
        <img src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}`} alt="" />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '.5rem' }}>
          <p>{movie.title || movie.name}</p>
          <p style={{ fontSize: '.9rem' }} ><AiTwotoneStar /> {movie.vote_average} </p>
        </div>
      </li>
    </>
  )
}