import styled from "styled-components";

export const LineCategory = styled.div`
  width: 99%;
  height: 3px;
  margin-block: .8rem;
  background-image: linear-gradient(to left, #213944, #2abdbb);
`

export const NewPremiersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  
  h2{
    font-weight: bold;
    color: #c3c3c3;
    font-size: 1.1rem;
    margin-block: 1rem;
  }
`

export const ContainerSwiper = styled.div`
  width: 83%;
  padding: 0 1rem;
`

export const ImageCarrousel = styled.img`
  width: 180px;
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
