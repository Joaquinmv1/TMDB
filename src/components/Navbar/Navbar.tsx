import { AiOutlineSearch } from 'react-icons/ai';
import { CarouselContainer, FullViewportImage, Header, InputSearch, Nav, NavBarLeft, NavBarRight, Ul } from './style';
import { useScroll } from "../../hooks";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { imageCarrousel } from '../../constants/images';
import { Autoplay, Pagination } from 'swiper';
import { useState } from 'react';

export default function Navbar() {
  const scroll = useScroll();
  // const swiper = useSwiper();

  return (
    <CarouselContainer>
      <Header>
        <Swiper
          navigation
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          pagination={{ clickable: true }}
          slidesPerView={1}
        >
          {imageCarrousel.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <FullViewportImage>
                  <img src={image} alt={`Slide ${index}`} />
                </FullViewportImage>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Nav scrolled={scroll}>
          <NavBarLeft>
            <h2>PicturePandemonium</h2>
            <Ul>
              <li>Home</li>
              <li>Movies</li>
              <li>Series</li>
              <li>Anime</li>
              <li>Contacto</li>
            </Ul>
          </NavBarLeft>
          <NavBarRight>
            <AiOutlineSearch />
            <InputSearch type="text" placeholder="Marvel, Naruto, Spider Man..." />
          </NavBarRight>
        </Nav>
      </Header>
    </CarouselContainer>
  )
}