import styled from "styled-components"

export const ContainerLogin = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  background: linear-gradient(to bottom, #000000 0%, #2a3940 100%);
`

export const InfoLogin = styled.div`
  width: 30%;
  height: 600px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    background-color: transparent;
    border: 1px solid #000;
    border-radius: 10px;
    padding: .5rem;
    margin: .5rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-weight: bold;
  }

  img{
    width: 20px;
  }
`