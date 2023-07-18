import { Search } from "../components";
import { API_KEY, categories } from "../constants/const";
import { FilterProps, Movie } from "../models/types";

export const fetchMoviesByCategory = async () => {
  try {
    const requests = categories.map(async (category) => {
      const response = await fetch(category.apiUrl);
      const data = await response.json();
      const movies = data.results.map((movie: Movie) => {
        return ({ ...movie, category: category.category, type: category.type });
      });

      return movies;
    });

    const moviesByCategory = await Promise.all(requests);
    const allMovies = moviesByCategory.flat();

    return allMovies;
  } catch (error) {
    return [];
  }
};

export const fetchSearchResult = async (search: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${search}`
  );
  const json = await res.json();
  const mappedResult = json.results.map((data: Search) => (
    {
      id: data.id,
      backdrop_path: data.backdrop_path,
      description: data.overview,
      title: data.title,
      name: data.name,
      type: data.media_type
    }
  ))

  return mappedResult
}

export const fetchFilteredData = async ({ category, year, duration, rate }: FilterProps) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${category}&primary_release_year=${year}&sort_by=${duration}&vote_average.gte=${rate}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const dataMovies = async (media: string, page:number) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/${media}?api_key=${API_KEY}&page=${page}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};


export const getDetailElement = async (type:string, id:string) => {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`);
    const data = await res.json();

    const creditsUrl = `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${API_KEY}`;
    const creditsResponse = await fetch(creditsUrl);
    const creditsData = await creditsResponse.json();

    const videosUrl = `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${API_KEY}`;
    const videosResponse = await fetch(videosUrl);
    const videosData = await videosResponse.json();
    const trailers = videosData.results.filter((video: any) => video.type === 'Trailer');


    return ({
      data,
      creditsData,
      trailers,
    });
  } catch (error) {
    return [];
  }
};