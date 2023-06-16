import { Carrousel, Navbar } from "./components";
import { categoriesCarrousel } from "./constants/images";
import { fetchMoviesByCategory } from "./services/tmdb.api";
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const moviesData = await fetchMoviesByCategory();
      setMovies(moviesData);
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      {categoriesCarrousel.map((category) => {
        const categoryMovies = movies.filter((movie) => movie.category === category);
        return (
          <Carrousel key={category} category={category} movies={categoryMovies} />
        );
      })}
    </>
  );
}

export default App;