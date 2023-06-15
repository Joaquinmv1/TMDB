import { useState, useEffect } from "react"
import { MoviesCard, Navbar } from "./components";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper";

const API_KEY = 'eded4ee4b78f79328cc20b65cd4c2b94'
const BASE_URL = 'https://image.tmdb.org/t/p/w500/';

interface Movies {
  id: number
  title: string
  poster_path: string
}

function App() {
  const [movies, setMovies] = useState<Array<Movies>>([]);

  const getMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=dragonball`);
    const json = await res.json();
    setMovies(json.results);
  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <>
      <Navbar />
      <div>
        <h2>Estrenos recientes</h2>
        <Swiper
          navigation
          slidesPerView={9}
          className="swiper-container">
          {movies && movies.slice(0, 15).map((movie: Movies) => {
            return (
              <SwiperSlide>
                <img width={200} src={`${BASE_URL}${movie.poster_path}`} alt={`Movie ${movie.title}`} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      {/* <MoviesCard movies={movies} /> */}
    </>
  )
}

export default App
