import { NewPremiersContainer } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Movie } from '../../models/types';
import { Link } from 'react-router-dom';

const BASE_URL = 'https://image.tmdb.org/t/p/w500/';

interface CarrouselProps {
  category: string;
  movies: Movie[];
}

export function Carrousel({ category, movies }: CarrouselProps) {
  return (
    <NewPremiersContainer>
      <h2>{category}</h2>
      <Swiper navigation slidesPerView={9} className="swiper-container">
        {movies?.map((movie: Movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`${movie.type}/${movie.id}`}>
            <img
              src={`${BASE_URL}${movie.poster_path}`}
              alt={`Movie ${movie.title}`}
            />
          </Link>
          </SwiperSlide>
        ))}
    </Swiper>
    </NewPremiersContainer >
  );
}