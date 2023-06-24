import styled from "styled-components";

export const ContainerSwiper = styled.div`
  width: 100%;
  
`

export const NewPremiersContainer = styled.div`
  margin: 1rem 1rem;
  position: relative;

  h2{
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`

export const Svg = styled.div`
  position: absolute;
  top: 50%;
  /* left: 50%; */
  z-index: 10005;
  width: 100%;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  opacity: 0;

  svg {
    font-size: 2rem;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out 0.2s; /* Ajustar aquí el retraso de la transición */

    &:hover {
      opacity: 1;
    }
  }
`;

export const ImageCarrousel = styled.img`
  width: 200px;
  height: auto;
  object-fit: contain;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    filter: grayscale(1);
    transition: all 0.4s ease;
    transform: scale(1.1);
  }

  /* &:hover + ${Svg} {
    display: flex;
    justify-content: center;
  } */
`;