export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  category: string;
  type: string
  backdrop_path: string
  name: string
  description: string
  vote_average:string
}

export interface Detail {
  backdrop_path: string
  title: string
  poster_path: string
  name: string
  vote_average: string
  first_air_date: string
  overview: string
  genres: Array
}

export interface CategoryUrls {
  movies: string;
  series: string;
  anime: string;
  top_rated: string;
  popular: string;
  upcoming: string;
  now_playing: string;
  all_movies: string;
  all_series: string;
  all_seasons: string;
}

export interface Cast {
  name: string;
  profile_path:string
}

export interface FilterProps {
  category: string
  year: string
  duration: string
  rate: string
}