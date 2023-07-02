import { motion } from "framer-motion";
import styled from "styled-components"

export const CarouselContainer = styled.div`
  /* position: relative; */
`;

export const Header = styled.header`
  width: 100%;
  /* position: relative; */
  
`

export const Overlay = styled.div`
  position: absolute;
  top: 40%;
  left: 10%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow:wrap column;
  gap: 10px;
  color: white;
  z-index: 100;
  transition: opacity 0.3s ease;

  h3 {
    font-size: 3rem;
  }

  p {
    font-size: 23rem;
  }

  button{
    display: block;
    width: 8rem;
    padding: .5rem;
    border: none;
    cursor: pointer;
  }
`;

export const FullViewportImage = styled(motion.div)`
  position: relative;
  width: 100%;
  max-height: 90vh;
  object-fit: cover;
  background-color: #fff;
  aspect-ratio: 16/9;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1));
  /* background-image: linear-gradient(180deg,hsla(0,0%,8%,0) 0,hsla(0,0%,8%,.15) 5%,hsla(0,0%,8%,.35)19%,hsla(0,0%,8%,.58) 44%,#141414 150%,#141414); */
  /* background-image: linear-gradient(180deg,hsla(0,0%,8%,0) 0,hsla(0,0%,8%,.15) 15%,hsla(0,0%,8%,.35) 29%,hsla(0,0%,8%,.58) 44%,#141414 68%,#141414); */
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  p{
    width: 500px;
    font-size: 1rem;
  }
`;

export const Navv = styled.nav<{ scrolled: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  position: fixed;
  width: 100%;
  z-index: 1000000;
  height: 50px;
  color: #fff;
  transition: background-color 0.3s ease;
  background-image: linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent);


  ${({ scrolled }) =>
    scrolled &&
    `background-color: rgb(0, 0, 0);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);`}

  &::before {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.20);
    }

  & h2 {
    cursor: pointer;
  }
`

export const NavBarLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* gap: 15px; */

  img{
    width: 100px;
  }
`

export const NavBarRight = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const Ul = styled.ul`
  display: flex;
  gap: 20px;
  cursor: pointer;
`

export const InputSearch = styled.input`
  width: 300px;
  background-color: transparent;
  font-weight: bold;
  border: none;
  color: #fff; /* Cambia el color del marcador de posición aquí */
  
  ::placeholder {
    color: #fff; /* Cambia el color del marcador de posición aquí */
  }
`

export const ButtonRight = styled.button`
  background-color: #48c3db;
  color: #fff;
  padding: .65rem 1rem;
  border: none;
  cursor: pointer;
  border-radius: 20px;
`