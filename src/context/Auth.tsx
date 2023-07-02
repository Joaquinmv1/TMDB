import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithRedirect, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from "../services/auth";

interface ContextProps {
  children: React.ReactNode
}

interface AuthContextProps {
  SignIn: () => void;
  logOut: () => void;
  user: any;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: ContextProps) => {
  const [user, setUser] = useState<any>({});

  const SignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe(); 
    };
  }, []);

  return (
    <AuthContext.Provider value={{ SignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  )
}

