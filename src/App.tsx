import { MovieDetail, CarrouselRender } from "./components";
import { useGetMovies } from "./hooks";
import { Routes, Route } from "react-router-dom"

function App() {
  const { movies } = useGetMovies();

  return (
    <>
      <Routes>
        <Route path='/' element={<CarrouselRender movies={movies} />} />
        <Route path='/:type/:id' element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;