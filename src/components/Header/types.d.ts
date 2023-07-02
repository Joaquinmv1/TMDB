export interface Search {
  id: number
  backdrop_path: string
  title: string
  overview: string
  name: string
  media_type: string
}

export interface NavProps {
  searchTerm: string
  data: Array<Movie>  | null
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export interface SearchProps {
  data: Array<Movie> | null
  searchTerm: string
}