import { Navbar, HeroSlide } from "./components";
import { Routes, Route, useLocation } from "react-router-dom"
import { Home, Detail, Login, ShowSearchView,  } from "./pages";
import { AuthProvider } from "./context/Auth";

function App() {
  const location = useLocation();

  return (
    <>
      <AuthProvider>
        {location.pathname !== '/login'  && <Navbar /> }
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/:type/:id' element={<Detail />} />
          <Route path='/movies' element={<ShowSearchView />}/>
        </Routes>
        {/* <Footer /> */}
      </AuthProvider>
    </>
  );
}

export default App;