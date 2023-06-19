import { NewPremiersContainer } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Movie } from '../../models/types';
import { Link } from 'react-router-dom';
import { Dna } from  'react-loader-spinner'

const BASE_URL = 'https://image.tmdb.org/t/p/w500/';

interface CarrouselProps {
  category: string;
  movies: Movie[];
  isLoading: boolean
}

export function Carrousel({ category, movies, isLoading }: CarrouselProps) {
  return (
    <NewPremiersContainer>
      <h2>{category}</h2>
      <Swiper navigation slidesPerView={9} className="swiper-container">
        {isLoading ? movies?.map((movie: Movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`${movie.type}/${movie.id}`}>
            <img
              src={`${BASE_URL}${movie.poster_path}`}
              alt={`Movie ${movie.title}`}
            />
          </Link>
          </SwiperSlide>
        )) : <Dna />}
    </Swiper>
    </NewPremiersContainer >
  );
}