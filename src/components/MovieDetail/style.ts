import styled from "styled-components";

export const ContainerDetail = styled.div`
  position: relative;
  width: 100%;
`
export const ImageBackground = styled.img`
  width: 100%;
  max-height: 50vh; 
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  image-rendering: auto;
  filter: brightness(.4) contrast(1.1); 
`

export const Image = styled.img`
  margin: 1rem;
  border-radius: 20px;
  width: 25%;
`

export const ContainerInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  gap: 30px;
  position: absolute;
  top: 120px;
  left: 160px;
  z-index: 2999;
  width: 90%;
`

export const ContentRight = styled.div`
  width: 50%;
  padding: 3rem 0;
  h2{
    font-size: 2.5rem;
  }
  p{
    font-size:1rem;
  }

  h5{
    padding-block:1rem;
    width: 750px;
  }
`