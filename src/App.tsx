import { CarrouselRender, Navbar, HeroSlide } from "./components";
import { useGetMovies } from "./hooks";
import { Routes, Route, useLocation } from "react-router-dom"
import { MovieDetail } from "./pages";

function App() {
  const { movies, isLoading } = useGetMovies();
  const location = useLocation();

  return (
    <>
      <Navbar />
      {location.pathname === '/' && <HeroSlide />}
      <Routes>
        <Route path='/' element={<CarrouselRender movies={movies} isLoading={isLoading} />} />
        <Route path='/:type/:id' element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;