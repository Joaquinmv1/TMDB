import styled from "styled-components";

export const ContainerDetail = styled.div`
  position: relative;
  width: 100%;
  height: auto;  
`

export const ImageBackground = styled.img`
  width: 100%;
  max-height: 40vh; 
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  image-rendering: auto;
  filter: brightness(.4) contrast(1.1); 
`

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  position: absolute;
  top: 140px;
  left: 160px;
  z-index: 2999;
  /* width: 100%; */

`
export const Image = styled.img`
  object-fit: contain;
  border-radius: 20px;
`

export const ContentRight = styled.div`
  width: 50%;
  padding: 3rem 0;

  h2{
    font-size: 2.5rem;
  }

  p{
    font-size:.9rem;
    font-weight:bold;
  }

  h5{
    padding-block:1rem;
    width: 90%;
    font-size: .9rem
  }
`

export const Sections = styled.div`
  ul{
    display: flex;
    gap: 20px;
    font-size: 1.3rem;
  }
`

