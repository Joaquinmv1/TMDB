import { useState, useEffect } from "react"
import styled from "styled-components";
import { Navbar } from "./components";

const API_KEY = 'eded4ee4b78f79328cc20b65cd4c2b94'
const BASE_URL = 'https://image.tmdb.org/t/p/w500/';

interface Movies {
  id: number
  title: string
  poster_path: string
}

export const ContainerMovies = styled.ul`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem), 1fr));
  gap: 20px;
  margin: 0 auto;
`

export const ContainerMoviesLi = styled.li`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    & img {
    width: 350px;
    height:450px;
    object-fit: cover;
  }

  & h3{
    width: 300px;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`

function App() {
  const [movies, setMovies] = useState<Array<Movies>>([]);

  const getMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=one-piece`);
    const json = await res.json();
    setMovies(json.results)
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <>
      <Navbar />
      {/* <div>
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
      </div> */}
    </>
  )
}

export default App
