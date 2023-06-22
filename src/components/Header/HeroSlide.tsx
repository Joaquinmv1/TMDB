import { Swiper, SwiperSlide } from 'swiper/react';
import { imageCarrousel } from '../../constants/images';
import { useState } from 'react';
import { FullViewportImage, Modal, Overlay } from '..';
import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'

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
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button style={{ backgroundColor: '#48c3db', color: 'white', textAlign: 'center' }}><BsFillPlayFill /> Play</button>
                    <button onClick={handleVisibleClick}><AiOutlinePlus /> Ver mas</button>
                  </div>
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