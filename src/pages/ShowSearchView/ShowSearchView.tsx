import { API_KEY } from '../../constants/const'
import { useEffect, useMemo, useState } from "react"
import { ShowSearchContainer, UlContainer } from ".";
import { Sidebar } from '..';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://image.tmdb.org/t/p/w500/';

export const ShowSearchView = () => {
  const [movies, setMovies] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('movies');
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('query');

  const cachedResults = useMemo(() => ({}), []);

  const getMovies = async () => {
    let results;

    if (cachedResults[currentCategory] && cachedResults[currentCategory][searchTerm]) {
      results = cachedResults[currentCategory][searchTerm];
    } else {
      const categoryUrls = {
        movies: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
        series: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`,
        anime: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=16`,
        top_rated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
        popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
        upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
        now_playing: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
        all_movies: `https://api.themoviedb.org/3/movie?api_key=${API_KEY}`,
        all_series: `https://api.themoviedb.org/3/series?api_key=${API_KEY}`,
        all_seasons: `https://api.themoviedb.org/3/seasons?api_key=${API_KEY}`,
      };

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

  console.log(cachedResults);
  

  useEffect(() => {
    getMovies();
  }, [currentCategory, searchTerm]);

  return (
    <>
      <ShowSearchContainer>
        <Sidebar selectedCategory={currentCategory} setSelectedCategory={setCurrentCategory} />
        <div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <UlContainer>
              {movies?.map((movie: any) => {
                return (
                  <li key={movie.id}>
                    <img loading='lazy' src={`${BASE_URL}${movie.poster_path}`} alt="" />
                  </li>
                )
              })}
            </UlContainer>
          </div>
        </div>
      </ShowSearchContainer>
    </>
  )
}
