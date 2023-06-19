import { Swiper, SwiperSlide } from 'swiper/react';
import { imageCarrousel } from '../../constants/images';
import { useState } from 'react';
import { FullViewportImage, Modal, Overlay } from '..';

export const HeroSlide = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(imageCarrousel[0]);
  
  const handleVisibleClick = () => {
    setIsVisible(!isVisible)
  }
  return (
    <>
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
    </>
  )
}