import { Swiper, SwiperSlide } from 'swiper/react';
import { imageCarrousel } from '../../../constants/const';
import { useState } from 'react';
import { ContainerModal, FullViewportImage, Modal, ModalContent, Overlay } from '../../../components';
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

  const handleSlideChange = (swiper: any) => {
    const index = swiper.activeIndex;
    setCurrentImage(imageCarrousel[index]);
    setActiveIndex(index);
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 2 },
    exit: { opacity: 0 }
  };

  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
      >
        {imageCarrousel.map((image, index) => {
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
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3>{currentImage.name}</h3>
                      <p style={{ fontSize: '1rem', width: '600px' }}>{currentImage.description}</p>
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
      <Modal>
        <div>
          {isVisible && (
            <ContainerModal>
              <motion.div
                className="modal"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
              >
                <ModalContent>
                  <img src={currentImage.image} alt="" />
                  <h2>{currentImage.name}</h2>
                  <p>{currentImage.description}</p>
                  <button onClick={handleVisibleClick}>X</button>
                </ModalContent>
              </motion.div>
            </ContainerModal>
          )}
        </div>
      </Modal>
    </>
  )
}