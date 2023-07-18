import { useEffect, useRef, useState } from "react";
import { CarrouselDetail, HeaderShow, MoviesList } from ".";
import { options } from "../../constants/const";
import { Movie } from "../../models/types";
import { dataMovies } from "../../services/tmdb.api";
import { CategoryList } from "./CategoryList";
import { ShowSearchView } from './ShowSearchView';

export const ShowSearch = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentCategory, setCurrentCategory] = useState('movie');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const moviesRef = useRef<HTMLLIElement>(null);  
  
  const fetchData = async (): Promise<void> => {
    const res = await dataMovies(currentCategory, currentPage);
    setMovies(res.results);
  };

  const loadMoreMovies = () => {
    const newPage = currentPage + 1;
    dataMovies(currentCategory, newPage).then((res) => {
      setMovies((prev) => [
        ...prev,
        ...res.results
      ]);
      setCurrentPage(prevCategory => prevCategory + 1);
    })
  };

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadMoreMovies();
      }
    })
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentCategory(e.target.value);
  };

  useEffect(() => {
    fetchData();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, options)
    if (moviesRef.current) {
      observer.observe(moviesRef.current);
    }

    return () => {
      if (moviesRef.current) {
        observer.unobserve(moviesRef.current);
      }
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <ShowSearchView>
      <HeaderShow />
      <CarrouselDetail />
      <CategoryList
        currentCategory={currentCategory}
        handleChange={handleChange}
        searchText={searchText}
      />
      <MoviesList
        movies={movies}
        moviesRef={moviesRef}
      />
    </ShowSearchView>
  );
};
