import { useEffect, useState } from "react";
import { ShowSearchView } from './ShowSearchView';
import { data } from "../../services/tmdb.api";
import { ButtonPagination, ContainerHeroShow, ContainerShow, ContainerSvgs, InputContainer, ShowSearchContainer, Sort, UlContainer } from ".";
import { AiOutlineSearch, AiTwotoneStar } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Movie } from "../../models/types";
import { BASE_URL } from "../../constants/const";

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
      return movies; // Devolver todas las películas cuando el campo de búsqueda está vacío
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
