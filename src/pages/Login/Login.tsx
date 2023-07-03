import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";

import { LoginView } from "./LoginView";

export const Login = () => {
  const navigate = useNavigate();
  const { SignIn, user } = useAuth();

  const init = async () => {
    try {
      await SignIn()
    } catch (error) {
      console.log(error); 
    }
  }

  return (
    <>
      <LoginView init={init}  />
    </>
  )
}