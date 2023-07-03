// COMPONENTS - STYLES
import { ContainerModal, FullViewportImage, Modal, ModalContent, Overlay } from "../../../components";
import { ImageHero, ImageHeroLogo, ImgStar } from "./style";

// ICONS
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { SlOptionsVertical } from "react-icons/sl";

import { imageCarrousel } from "../../../constants/const";
import { motion } from "framer-motion"

interface Props {
  handleVisibleClick: () => void;
  isVisible: boolean;
}

const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 2 },
  exit: { opacity: 0 }
};

export const HeroImageView = ({ handleVisibleClick, isVisible }: Props) => {
  return (
    <>
      <div>
        <FullViewportImage
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ImageHero src={imageCarrousel[0].image} alt={`Slide 0`} />
          <Overlay
            as={motion.div}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ImageHeroLogo src="644884.png" alt="hero logo" />
            <p style={{ fontWeight: 'bold' }}>Action - Adventure - Comedy | 20 October 1999 (JPN)</p>
            <p style={{ fontSize: '1rem', width: '600px' }}>{imageCarrousel[0].description}</p>
            <ImgStar src="https://o.remove.bg/downloads/c0fb79b5-3676-4246-9f38-af62d5344a09/star-removebg-preview.png" alt="" />
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <button >
                <BsFillPlayFill /> Play
              </button>
              <button onClick={handleVisibleClick}>
                <AiOutlinePlus /> Ver mas
              </button>
              <div>
                <AiOutlinePlus /> Favorites
              </div>
              <SlOptionsVertical />
            </div>
          </Overlay>
        </FullViewportImage>
      </div>
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
                  <img src={imageCarrousel[0].image} alt="" />
                  <h2>{imageCarrousel[0].name}</h2>
                  <p>{imageCarrousel[0].description}</p>
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