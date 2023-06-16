import { NewPremiersContainer } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const BASE_URL = 'https://image.tmdb.org/t/p/w500/';

interface Movies {
  id: number
  title: string
  poster_path: string
}

interface CarrouselMovies {
  movies: Array<Movies>
}

export function Carrousel({movies}: CarrouselMovies) {
  return (
    <>
       <NewPremiersContainer>
        <h2>Ultimos Estrenos</h2>
        <Swiper
          navigation
          slidesPerView={9}
          className="swiper-container">
          {movies && movies.slice(0, 15).map((movie: Movies) => {
            return (
              <SwiperSlide>
                <img src={`${BASE_URL}${movie.poster_path}`} alt={`Movie ${movie.title}`} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </NewPremiersContainer>
    </>
  )
}