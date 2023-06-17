import styled from "styled-components"

export const ContainerModal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #000;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ModalContent = styled.div`
  background-color: #fff;
  width: 50%;
  height: auto;
  color: #fff;
  background-color: rgb(17, 17, 17);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    width: 100%;
    height: 400px;
    border-radius: 0 10px 10px;
    border-radius: 10px;
    object-fit: cover;
    object-position: top;
  }

  h2 {
    padding:.8rem;
  }

  p{
    padding:1.5rem;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;

    margin: 20px;
    font-size: 1.3rem;
    color: #f80bf0;
    width: 30px;
    height: 30px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50px;
  }
`;