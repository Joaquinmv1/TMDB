import styled from "styled-components";

export const ContainerSwiper = styled.div`
  width: 100%;
  /* position: relative;
  top: 680px; */
  padding: 0 .5%;

  img {


  }
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
  z-index: 10005;
  width: 100%;
  opacity: 0;

  svg {
    font-size: 2rem;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out 0.2s; 

    &:hover {
      opacity: 1;
    }
  }
`;

export const ImageCarrousel = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  aspect-ratio: 16/9;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    filter: grayscale(1);
    transition: all 0.4s ease;
    transform: scale(1.1);
  }
`;