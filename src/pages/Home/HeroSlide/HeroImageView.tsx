import { BsFillPlayFill } from "react-icons/bs"
import { ContainerModal, FullViewportImage, Modal, ModalContent, Overlay } from "../../../components"
import { imageCarrousel } from "../../../constants/const"
import { AiOutlinePlus } from "react-icons/ai"
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


export const HeroSlideView = ({ handleVisibleClick, isVisible }: Props) => {
  return (
    <>
      <div>
        <FullViewportImage
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={imageCarrousel[0].image} alt={`Slide 0`} />
          <Overlay
            as={motion.div}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3>{imageCarrousel[0].name}</h3>
            <p style={{ fontSize: '1rem', width: '600px' }}>{imageCarrousel[0].description}</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button style={{ backgroundColor: '#48c3db', color: 'white', textAlign: 'center' }}>
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