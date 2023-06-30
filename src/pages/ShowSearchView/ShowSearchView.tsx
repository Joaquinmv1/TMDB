import { API_KEY, categoryUrls } from '../../constants/const'
import { useEffect, useMemo, useState } from "react"
import { ShowSearchContainer, UlContainer } from ".";
import { Sidebar } from '..';
import { useLocation } from 'react-router-dom';
import { AiTwotoneStar } from 'react-icons/ai';

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
      <ShowSearchContainer>
        <Sidebar selectedCategory={currentCategory} setSelectedCategory={setCurrentCategory} />
        <div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <UlContainer>
              {movies?.map((movie: any) => {
                return (
                  <li key={movie.id}>
                    <img loading='lazy' src={`${BASE_URL}${movie.poster_path}`} alt="" />
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center', padding: '.5rem'}}>
                      <p>{movie.title || movie.name}</p>
                      <p style={{fontSize:'.9rem'}} ><AiTwotoneStar /> {movie.vote_average} </p>
                    </div>
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
