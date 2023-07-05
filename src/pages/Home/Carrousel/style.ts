import styled from "styled-components";

export const NewPremiersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  /* margin: 0rem 1rem; */
  

  h2{
    font-weight: bold;
    color: #c3c3c3;
    font-size: 1.1rem;
    margin-block: 1rem;
  }
`

export const ContainerSwiper = styled.div`
  width: 100%;
  width: 91%;
  /* padding: 0 .5%; */

  img {
    border-radius: 10px;
  }
`

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
