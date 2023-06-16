import { NewPremiersContainer } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const BASE_URL = 'https://image.tmdb.org/t/p/w500/';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  category: string;
}

interface CarrouselProps {
  category: string;
  movies: Movie[];
}

export function Carrousel({ category, movies }: CarrouselProps) {
  return (
    <NewPremiersContainer>
      <h2>{category}</h2>
      <Swiper navigation slidesPerView={9} className="swiper-container">
        {movies.map((movie: Movie) => (
          <SwiperSlide key={movie.id}>
            <img
              src={`${BASE_URL}${movie.poster_path}`}
              alt={`Movie ${movie.title}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </NewPremiersContainer>
  );
}