import { BsFillPlayFill } from "react-icons/bs"
import { ContainerModal, FullViewportImage, Modal, ModalContent, Overlay } from "../../../components"
import { imageCarrousel } from "../../../constants/const"
import { AiOutlinePlus } from "react-icons/ai"
import { motion } from "framer-motion"
import styled from "styled-components"

interface Props {
  handleVisibleClick: () => void;
  isVisible: boolean;
}

const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 2 },
  exit: { opacity: 0 }
};

export const ImageHero = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`


export const ImageHeroLogo = styled.img`
  width: 30%;
`


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
            <ImageHeroLogo src="644884.png" alt="" />
            <p style={{ fontSize: '1rem', width: '600px' }}>{imageCarrousel[0].description}</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button >
                <BsFillPlayFill /> Play
              </button>
              <button onClick={handleVisibleClick}>
                <AiOutlinePlus /> Ver mas
              </button>
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