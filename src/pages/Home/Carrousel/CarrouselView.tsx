import { ContainerSwiper, ImageCarrousel, LineCategory, NewPremiersContainer } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Movie } from '../../../models/types';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../../constants/const';
import 'swiper/css';
import 'swiper/css/navigation';

interface CarrouselProps {
  category: string;
  movies: Array<Movie> | undefined;
}

export function CarrouselView({ category, movies }: CarrouselProps) {
  return (
    <NewPremiersContainer>
      <ContainerSwiper>
        {movies &&
          <div className='line-category'>
            <h2>{category}</h2>
            <LineCategory />
          </div>}
        <Swiper
          slidesPerView={8}
          loop={true}
          direction="horizontal"
        >
          {movies?.map((movie: Movie) => (
            <SwiperSlide key={movie.id}>
              <Link to={`${movie.type}/${movie.id}`}>
                <ImageCarrousel
                  src={`${BASE_URL}${movie.poster_path || movie.backdrop_path}`}
                  alt={`Movie ${movie.title}`}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </ContainerSwiper>
    </NewPremiersContainer>
  );
}
