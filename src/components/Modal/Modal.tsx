import styled from "styled-components"

interface ImageCarrousel {
  name: string
  description: string
  image: string
}

interface ModalProps {
  currentImage: ImageCarrousel
  isVisible: boolean
  handleVisibleClick: () => void
}

export default function Modal({ currentImage, isVisible, handleVisibleClick }: ModalProps) {
  return (
    <>
      {isVisible &&
        <ContainerModal>
          <ModalContent>
            <img src={currentImage.image} alt="" />
            <h2>{currentImage.name}</h2>
            <p>{currentImage.description}</p>
            <button onClick={handleVisibleClick}>X</button>
          </ModalContent>
        </ContainerModal>}
    </>
  )
}

export const ContainerModal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background:rgba(0,0,0, .5);
  color: #000;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ModalContent = styled.div`
  background-color: #fff;
  width: 500px;
  height: 500px;
  
  position: relative;

  h2{
    position: absolute;
    top: 50%;
  }

  img {
    position: absolute;
    top: -35px;
    width: 100%;
    height: 350px;
    object-fit: contain;
  }

  button {
    position: absolute;
    top: 0;
    left: 90%;
    font-size: 1.3rem;
    color: #f80bf0;

    width: 30px;
    height: 30px;
    border: none;
    background-color:transparent;
    cursor: pointer;
  }
`
// { children }