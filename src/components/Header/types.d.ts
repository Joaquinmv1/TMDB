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
  data: Array<Movie> | null
  detectedChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  cleanInput: boolean
  clearInputValue: () => void
}

export interface SearchProps {
  data: Array<Movie> | null
  searchTerm: string
  cleanInput: boolean
  clearInputValue: () => void
}