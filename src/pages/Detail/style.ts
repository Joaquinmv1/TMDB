import styled from "styled-components";

export const Shadow = styled.div`
  background-color: transparent;
    background-image: linear-gradient(180deg,hsla(0,0%,8%,0) 0,hsla(0,0%,8%,.15) 15%,hsla(0,0%,8%,.35) 29%,hsla(0,0%,8%,.58) 44%,#141414 68%,#141414);
    background-position: 0 top;
    background-repeat: repeat-x;
    background-size: 100% 100%;
    bottom: -1px;
    height: 14.7vw;
    opacity: 1;
    top: auto;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

  /* &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 500px;
    filter: brightness(0.45) contrast(1.3) drop-shadow(0 10px 20px rgba(0, 0, 0, 0.8)); 
   
    background-color: transparent;
    background-image: linear-gradient(180deg,hsla(0,0%,8%,0) 0,hsla(0,0%,8%,.15) 15%,hsla(0,0%,8%,.35) 29%,hsla(0,0%,8%,.58) 44%,#141414 68%,#141414);
    z-index: 2;
  } */
`;

export const ContainerDetail = styled.div`
  width: 100%;
  min-height: 100vh;
  /* overflow: hidden; */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 231213;
  filter: brightness(.8) contrast(1.1); 
`;

export const ImageBackground = styled.img`
  min-height: 50vh;

  width: 100%;
  object-fit: cover;
  object-position: center;
  background-repeat: no-repeat;
  image-rendering: auto;
  filter: brightness(0.45) contrast(1.3) drop-shadow(0 10px 20px rgba(0, 0, 0, 0.8)); /* Agrega sombra al componente */
`;

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* min-height: 100vh; */
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