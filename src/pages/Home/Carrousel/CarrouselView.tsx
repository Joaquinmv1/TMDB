import { ContainerSwiper, ImageCarrousel, NewPremiersContainer } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Movie } from '../../../models/types';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../../constants/const';
import 'swiper/css';
import 'swiper/css/navigation';

interface CarrouselProps {
  category: string;
  movies: Movie[];
}

export function CarrouselView({ category, movies }: CarrouselProps) {
  return (
    <NewPremiersContainer>
      <ContainerSwiper>
      <h2>{category}</h2>
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



 // breakpoints={{
          //   1700: {
          //     slidesPerView: 9,
          //     spaceBetween: 0
          //   },
          //   1500: {
          //     slidesPerView: 8,
          //   },
          //   1300: {
          //     slidesPerView: 7,
          //     spaceBetween: 100
          //   },
          //   1024: {
          //     slidesPerView: 6,
          //     spaceBetween: 100
          //   },
          //   900: {
          //     slidesPerView: 5,
          //     spaceBetween: 100
          //   },
          //   768: {
          //     slidesPerView: 4,
          //     spaceBetween: 60
          //   },
          //   640: {
          //     slidesPerView: 3,
          //     // spaceBetween: 70,
          //   },
          //   320: {
          //     slidesPerView: 2,
          //     spaceBetween: 100,
          //   },
          //   100: {
          //     slidesPerView: 1,
          //     // spaceBetween: 10
          //   }
          // }}