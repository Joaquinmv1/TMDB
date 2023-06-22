import { categories } from "../constants/images";

export const fetchMoviesByCategory = async () => {
  try {
    const requests = categories.map(async (category) => {
      const response = await fetch(category.apiUrl);
      const data = await response.json();
      const movies = data.results.map((movie: any) => {
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
