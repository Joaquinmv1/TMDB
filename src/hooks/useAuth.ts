import { useContext, } from "react"
import { AuthContext } from "../context";

export const useAuth = () => {
  const contextAuth = useContext(AuthContext);

  if (contextAuth === undefined) {
    throw new Error('error')
  }

  return contextAuth
}