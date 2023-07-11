import { useEffect, useRef, useState } from "react";
import { Movie } from "../../models/types";
import { data } from "../../services/tmdb.api";
import { ShowSearchView } from './ShowSearchView';

const SUM = 'sum';
const RES = 'res';

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5
};

export const ShowSearch = () => {
  const [movies, setMovies] = useState<any>([]);
  const [currentCategory, setCurrentCategory] = useState('movie');
  const [currentPage, setCurrentPage] = useState(2);
  const [searchText, setSearchText] = useState('');
  const moviesRef = useRef<any>(null);

  const fetchData = async (): Promise<void> => {
    const res = await data(currentCategory, currentPage);
    setMovies(res.results);
  };

  const loadMoreMovies = () => {
    data(currentCategory, currentPage + 1).then((res) => {
      setMovies((prev) => [
        ...prev,
        ...res.results
      ]);
      setCurrentPage(prevCategory => prevCategory + 1)
    })
  }

  const handleObserver = (entries: any) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadMoreMovies();
      }
    })
  }

  // const pagination = (cal: string): void => {
  //   if (cal === SUM) {
  //     setCurrentPage(prevState => prevState + 1);
  //   } else {
  //     setCurrentPage(prevState => prevState - 1);
  //   }
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, options)
    if (moviesRef.current) {
      observer.observe(moviesRef.current)
    }

    return () =>{
      if(moviesRef.current) {
        observer.unobserve(moviesRef.current);
      }
    } 
  }, [currentPage])

  return (
    <ShowSearchView
      movies={movies}
      handleChange={handleChange}
      currentCategory={currentCategory}
      currentPage={currentPage}
      searchText={searchText}
      setCurrentCategory={setCurrentCategory}
      moviesRef={moviesRef}
    />
  );
};
