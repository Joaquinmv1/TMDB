import { useEffect, useState } from "react";
import { CarouselContainer, FullViewportImage, Header, Nav, Overlay, Ul } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const images = [
    'Dibujo sin título (1).svg',
    'SPIDERMAN.png',
    'onepiece.png'
  ];


  return (
    <CarouselContainer>
      <Header>
        <Swiper centeredSlides={true} autoplay={{ delay: 3000, disableOnInteraction: false }}>
          {images.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <FullViewportImage src={image} alt={`Slide ${index}`} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Overlay />
        <Nav scrolled={scrolled}>
          <h2>PicturePandemonium</h2>
          <Ul>
            <li>Home</li>
            <li>Movies</li>
            <li>Series</li>
            <li>Anime</li>
            <li>Contacto</li>
          </Ul>
          <input type="text" placeholder="Marvel, Naruto, Spider Man..." />
        </Nav>
      </Header>
    </CarouselContainer>
  )
}