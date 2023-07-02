import styled from "styled-components";

export const ContainerDetail = styled.div`
  position: relative;
  min-height: calc(100vh - 200px);
  width: 100%;
  background-attachment: fixed;
  /* position: fixed; */
`

export const ImageBackground = styled.img`
  width: 100%;
  max-height: 100vh; 
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  image-rendering: auto;
  filter: brightness(.45) contrast(1.3);
`

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  position: absolute;
  top: 120px;
  left: 160px;
  z-index: 2999;

  @media screen and (max-width: 1555px){
    flex-direction: column;
    top: 100px;
    left: 0;
  }
  

`
export const Image = styled.img`
  object-fit: cover;
  aspect-ratio: 16/9;
  border-radius: 20px;
  width: 30%;
  height: 700px;
  transition: all 0.3s ease;

  &:hover{
    filter: grayscale(1);
    transition: all 0.4s ease;
  }

  @media screen and (max-width: 1550px){
    width: 40%;
    height: 600px;
  }

  @media screen and (max-width: 1147px){
    width: 60%;
    height: 500px;
  }
`

export const ContentRight = styled.div`
  width: 50%;
  padding: 1.5rem 0;

  /* @media screen and (max-width: 1550px){
    width: 100%;
  } */

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

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`