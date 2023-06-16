import { useEffect } from "react";
import { motion } from "framer-motion";
import { ContainerModal, ModalContent } from "./styles";

interface ImageCarrousel {
  name: string;
  description: string;
  image: string;
}

interface ModalProps {
  currentImage: ImageCarrousel;
  isVisible: boolean;
  handleVisibleClick: () => void;
}

export default function Modal({
  currentImage,
  isVisible,
  handleVisibleClick
}: ModalProps) {

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 2 },
    exit: { opacity: 0 }
  };

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isVisible]);

  return (
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
  );
}