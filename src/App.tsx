import { Navbar, HeroSlide } from "./components";
import { Routes, Route, useLocation } from "react-router-dom"
import { Home, Detail } from "./pages";
import { AuthProvider } from "./context/Auth";

function App() {
  const location = useLocation();

  // const RequireAuth = ({children}) => {
  //   return user ? children : <Navigate to={'/login'} />
  // }

  return (
    <>
      <AuthProvider>
        <Navbar />
        {location.pathname === '/' && <HeroSlide />}
        <Routes>
          <Route path='/' element={<Home  />} />
          <Route path='/:type/:id' element={<Detail />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;