import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth"

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


export const Login = () => {
  const navigate = useNavigate();
  const { SignIn, user } = useAuth();

  const init = async () => {
    try {
      await SignIn()
    } catch (error) {}
  }

  return (
    <>
      <ContainerLogin>
        <InfoLogin>
          <h2>Login</h2>
          <p style={{color: '#c2c2c2'}}>PicturePandemonium</p>
          <p style={{color: '#c2c2c2'}}>Welcome back!</p>
          <button onClick={init}><img src='./google.png' alt="google login" /> Sign in with google</button>
          <button><img src='./Octicons-mark-github.svg' alt="google login" />Sign in with github</button>
          <button><img src='./twiiter.png' alt="google login" />Sign in with twitter</button>
        </InfoLogin>
        <div>
          <div style={{background: '#000', width: '500px' , height: '600px'}}></div>
        </div>
      </ContainerLogin>
    </>
  )
}