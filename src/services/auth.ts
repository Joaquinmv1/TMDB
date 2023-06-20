import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAhJxH8CHLHBJxXODOgUauNkh63mCjYrfQ",
  authDomain: "login-tmdb-75952.firebaseapp.com",
  projectId: "login-tmdb-75952",
  storageBucket: "login-tmdb-75952.appspot.com",
  messagingSenderId: "390289170209",
  appId: "1:390289170209:web:3f7129e10a3082b0152860"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)