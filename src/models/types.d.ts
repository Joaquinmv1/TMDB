export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  category: string;
  type: string
  backdrop_path: string
  name: string
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