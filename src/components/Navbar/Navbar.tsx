import { AiOutlineSearch } from 'react-icons/ai';
import { CarouselContainer, FullViewportImage, Header, InputSearch, Nav, NavBarLeft, NavBarRight, Overlay, Ul } from './style';
import { useScroll } from "../../hooks";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Navbar() {
  const scroll = useScroll();

  const images = [
    'onepiece.png',
    'Dibujo sin título (1).svg',
    'SPIDERMAN.png',
  ];

  return (
    <CarouselContainer>
      <Header>
        <Swiper centeredSlides={true} autoplay={true}>
          {images.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <FullViewportImage>
                  <img src={image} alt={`Slide ${index}`} />
                </FullViewportImage>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Overlay />
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