import { Swiper, SwiperSlide } from 'swiper/react';
import { imageCarrousel } from '../../../constants/images';
import { useState } from 'react';
import { FullViewportImage, Modal, Overlay } from '../../../components';
import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import { AnimatePresence, motion } from 'framer-motion';

export const HeroSlide = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(imageCarrousel[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleVisibleClick = () => {
    setIsVisible(!isVisible)
  }

  const handleSlideChange = (swiper:any) => {
    const index = swiper.activeIndex;
    console.log(swiper);
    setCurrentImage(imageCarrousel[index]);
    setActiveIndex(index);
  };


  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
      >
        {imageCarrousel.map((image, index) => {http://localhost:5173
          return (
            <SwiperSlide key={index}>
              <AnimatePresence initial={false} custom={activeIndex}>
                {index === activeIndex && (
                  <FullViewportImage
                    key={index}
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={image.image} alt={`Slide ${index}`} />
                    <Overlay
                      as={motion.div}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3>{currentImage.name}</h3>
                      <p style={{fontSize: '1rem', width: '600px'}}>{currentImage.description}</p>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <button style={{ backgroundColor: '#48c3db', color: 'white', textAlign: 'center' }}><BsFillPlayFill /> Play</button>
                        <button onClick={handleVisibleClick}><AiOutlinePlus /> Ver mas</button>
                      </div>
                    </Overlay>
                  </FullViewportImage>
                )}
              </AnimatePresence>
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