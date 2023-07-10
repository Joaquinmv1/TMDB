import styled from "styled-components"

export const ContainerHeroShow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  img{
    height: 450px;
    object-fit: cover;
    display: block;
    padding: 1rem;
    border-radius:30px;
    width: 100%;
    width: 87%;
  }
`

export const ContainerShow = styled.div`
  width: 98%;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`

export const CarrouselButtons = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  position: absolute;

  button {
    background-color: transparent;
    color: #fff;
    border: none;
    font-weight: bold;
    cursor: pointer;
    padding: .5rem 1rem;
    font-size: 1.5rem;
    border-radius: 50%;
    transition:all .3s ease;
  }

  button:hover{
    transform: scale(1.1);
    color: #fff;
    background-color: rgb(72, 195, 219);
  }
`

const InputRadioContainer = styled.div`
  position: absolute;
`