import { useState, useEffect } from "react"
import { Carrousel, MoviesCard, Navbar } from "./components";

const API_KEY = 'eded4ee4b78f79328cc20b65cd4c2b94'

interface Movies {
  id: number
  title: string
  poster_path: string
}

function App() {
  const [movies, setMovies] = useState<Array<Movies>>([]);

  const getMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=one`);
    const json = await res.json();
    setMovies(json.results);
  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <>
      <Navbar />
      <Carrousel movies={movies} />
      <MoviesCard movies={movies} />
    </>
  )
}

export default App