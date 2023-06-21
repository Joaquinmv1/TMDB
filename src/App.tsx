import { Navbar, HeroSlide, Footer } from "./components";
import { Routes, Route, useLocation } from "react-router-dom"
import { Home, Detail, Login } from "./pages";
import { AuthProvider } from "./context/Auth";

function App() {
  const location = useLocation();

  return (
    <>
      <AuthProvider>
        {location.pathname === '/' && <HeroSlide />}
        {location.pathname !== '/login' && <Navbar /> }
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/:type/:id' element={<Detail />} />
        </Routes>
        {/* <Footer /> */}
      </AuthProvider>
    </>
  );
}

export default App;