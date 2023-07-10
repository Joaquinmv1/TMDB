import { useEffect, useState } from "react";
import { Movie } from "../../models/types";
import { data } from "../../services/tmdb.api";
import { ShowSearchView } from './ShowSearchView';

const SUM = 'sum';
const RES = 'res';

export const ShowSearch = () => {
  const [movies, setMovies] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('movie');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');

  const fetchData = async (): Promise<void> => {
    const res = await data(currentCategory, currentPage);
    console.log(res);
    setMovies(res.results || []);
  };

  const pagination = (cal: string): void => {
    if (cal === SUM) {
      setCurrentPage(prevState => prevState + 1);
    } else {
      setCurrentPage(prevState => prevState - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const filterMovies = (movies: Movie[], searchText: string, currentCategory: string): Movie[] => {
    if (searchText.trim() === '') {
      return movies; 
    }

    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchText.toLowerCase()) && currentCategory === 'movie'
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filteredMovies = filterMovies(movies, searchText, currentCategory);
    setMovies(filteredMovies);
  }, [searchText, currentCategory]);

  return (
    <ShowSearchView
      movies={movies}
      pagination={pagination}
      handleChange={handleChange}
      currentCategory={currentCategory}
      currentPage={currentPage}
      searchText={searchText}
      setCurrentCategory={setCurrentCategory}
    />
  );
};
