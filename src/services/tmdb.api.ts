export const fetchMoviesByCategory = async () => {
  const API_KEY = 'eded4ee4b78f79328cc20b65cd4c2b94';
  const categories = {
    'ultimos estrenos': {
      apiUrl: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
      category: 'ultimos estrenos',
    },
    anime: {
      apiUrl: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=16`,
      category: 'Anime',
    },
    películas: {
      apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
      category: 'Películas',
    },
    series: {
      apiUrl: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=18`,
      category: 'Series',
    },
  };

  try {
    const requests = Object.values(categories).map(async (category) => {
      const response = await fetch(category.apiUrl);
      const data = await response.json();
      const movies = data.results.map((movie) => {
        // console.log(movie);
        return (
          {...movie, category: category.category }
        )
      });
      // console.log(movies);
      return movies;
    });

    const moviesByCategory = await Promise.all(requests);
    const allMovies = moviesByCategory.flat();

    return allMovies;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};
