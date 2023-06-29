import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";

import { ContainerLogin, InfoLogin } from ".";

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