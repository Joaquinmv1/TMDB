import { AiOutlineSearch } from 'react-icons/ai';
import { CarouselContainer, FullViewportImage, Header, InputSearch, Nav, NavBarLeft, NavBarRight, Overlay, Ul } from './style';
import { useScroll } from "../../hooks";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { imageCarrousel } from '../../constants/images';
import { Modal } from '..';
import { useState } from 'react';

export default function Navbar() {
  const [currentImage, setCurrentImage] = useState(imageCarrousel[0]);
  const [isVisible, setIsVisible] = useState(false);
  const scroll = useScroll();

  const handleVisibleClick = () => {
    setIsVisible(!isVisible)
  }

  return (
    <CarouselContainer>
      <Header>
        <Swiper
          pagination={{ clickable: true }}
          slidesPerView={1}
          onSlideChange={(swiper) => setCurrentImage(imageCarrousel[swiper.activeIndex])}
        >
          {imageCarrousel.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <FullViewportImage>
                  <img src={image.image} alt={`Slide ${index}`} />
                  <Overlay>
                     <h3>{currentImage.name}</h3>
                    <p>{currentImage.description}</p>
                    <button onClick={handleVisibleClick}>Ver mas</button>
                  </Overlay>
                </FullViewportImage>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Modal
          currentImage={currentImage}
          isVisible={isVisible}
          handleVisibleClick={handleVisibleClick}
        />
        <Nav scrolled={scroll}>
          <NavBarLeft>
            <h2>PicturePandemonium</h2>
            <Ul>
              <li>Home</li>
              <li>Movies</li>
              <li>Series</li>
              <li>Anime</li>
              <li>Favoritos</li>
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