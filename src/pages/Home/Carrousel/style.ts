import styled from "styled-components";

export const NewPremiersContainer = styled.div`
  margin: 1rem 1rem;
  position: relative;

  h2{
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  img {
    width: 200px;
    object-fit: contain;
    transition: all 0.3s ease;
  }

  img:hover{
    filter: grayscale(1);
    transition: all 0.4s ease;
    transform: scale(1.1);
  }
`