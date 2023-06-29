import { Navbar } from "./components";
import { Routes, Route, useLocation } from "react-router-dom"
import { Home, Detail, Login, ShowSearchView, } from "./pages";
import { AuthProvider } from "./context/Auth";

function App() {
  const location = useLocation();

  return (
    <>
      <AuthProvider>
        {location.pathname !== '/movies' && <Navbar />}
        <Routes>  
          <Route path="/login" element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/:type/:id' element={<Detail />} />
          <Route path='/movies' element={<ShowSearchView />} />
        </Routes>
       </AuthProvider>
    </>
  );
}

export default App;