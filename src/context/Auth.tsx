import { useContext, createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithRedirect, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from "../services/auth";

interface ContextProps {
  children: React.ReactNode
}

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: ContextProps) => {
  const [user, setUser] = useState({});

  const SignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  }

  return (
    <AuthContext.Provider value={{ SignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  )
}

