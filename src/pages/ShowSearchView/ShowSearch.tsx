import { categoryUrls } from '../../constants/const'
import { useEffect, useMemo, useState } from "react"
import { useLocation } from 'react-router-dom';
import { ShowSearchView } from './ShowSearchView';

export const ShowSearch = () => {
  const [movies, setMovies] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('movies');
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('query');

  const cachedResults: { [key: string]: { [key: string]: unknown[] } } = useMemo(() => ({}), []);

  const getMovies = async () => {
    let results;

    if (cachedResults[currentCategory] &&
      searchTerm &&
      cachedResults[currentCategory][searchTerm]) {
      results = cachedResults[currentCategory][searchTerm];
    } else {
      const url = categoryUrls[currentCategory];

      if (url) {
        const searchUrl = searchTerm ? `${url}&query=${searchTerm}` : url;
        const res = await fetch(searchUrl);
        const json = await res.json();
        results = json.results;
        setMovies(json.results);

        cachedResults[currentCategory] = results;
      }
    }

    return results;
  };

  useEffect(() => {
    getMovies();
  }, [currentCategory, searchTerm]);

  return (
    <>
      <ShowSearchView
        movies={movies}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
    </>
  )
}
