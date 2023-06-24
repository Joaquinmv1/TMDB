import { API_KEY } from '../../constants/images'
import { useEffect, useState } from "react"
import { ShowSearchContainer, UlContainer } from ".";
import { Sidebar } from '..';

const BASE_URL = 'https://image.tmdb.org/t/p/w500/';

export const ShowSearchView = () => {
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/genre/16/movies?api_key=${API_KEY}&with_genres=16`);
    const json = await res.json();
    setMovies(json.results);
  }

  useEffect(() => {
    getMovies()
  }, []);

  return (
    <>
      <ShowSearchContainer>
        <Sidebar />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <UlContainer>
            {movies?.map((movie: any) => {
              return (
                <li key={movie.id}>
                  <img src={`${BASE_URL}${movie.poster_path}`} alt="" />
                </li>
              )
            })}
          </UlContainer>
        </div>
      </ShowSearchContainer>
    </>
  )
}