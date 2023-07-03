import { ContainerLogin, InfoLogin } from "."

interface Props {
  init: () => void;
}

export const LoginView = ({ init }: Props) => {
  return (
    <>
      <ContainerLogin>
        <InfoLogin>
          <h2>Login</h2>
          <p style={{ color: '#c2c2c2' }}>PicturePandemonium</p>
          <p style={{ color: '#c2c2c2' }}>Welcome back!</p>
          <button onClick={init}><img src='./google.png' alt="google login" /> Sign in with google</button>
          <button><img src='./Octicons-mark-github.svg' alt="google login" />Sign in with github</button>
          <button><img src='./twiiter.png' alt="google login" />Sign in with twitter</button>
        </InfoLogin>
        <div>
          <div style={{ background: '#000', width: '500px', height: '600px' }}></div>
        </div>
      </ContainerLogin>
    </>
  )
}