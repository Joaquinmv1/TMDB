import { Search } from "../components";
import { API_KEY, categories } from "../constants/const";
import { Movie } from "../models/types";

export const fetchMoviesByCategory = async () => {
  try {
    const requests = categories.map(async (category) => {
      const response = await fetch(category.apiUrl);
      const data = await response.json();
      const movies = data.results.map((movie: Movie) => {
        return ({ ...movie, category: category.category, type:category.type });
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

export const fetchSearchResult = async (search:string) => {
  const res = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${search}`);
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
