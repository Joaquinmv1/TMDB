import { SearchInput, Sort } from "."

interface Props {
  searchText:string
  currentCategory:string
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const CategoryList = (props: Props) => {
  return (
    <>
      <Sort>
        <select value={props.currentCategory} onChange={props.handleChange} >
          <option value="movie,tv,serie">Category</option>
          <option value="movie">Movies</option>
          <option value="tv">Series</option>
          <option value="person">Actors</option>
          <option value="35">Comedy</option>
        </select>
        <SearchInput searchText={props.searchText} />
      </Sort>
    </>
  )
}