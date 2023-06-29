import { Link } from "react-router-dom"
import { ButtonSearch, UlSearchContainer } from "."
import { BASE_URL } from "../../constants/const"

interface SearchProps {
  data: any
  searchTerm: string
}

export const SearchResults = ({ data, searchTerm }: SearchProps) => {
  return (
    <>
      {data && searchTerm.length >= 3 && (
        <UlSearchContainer>
          {data.slice(0, 7).map((result: any) => (
            <Link to={`/${result.type}/${result.id}`}>
              <li key={result.id}>
                <img width={100} src={`${BASE_URL}${result.backdrop_path}`} alt="" />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontSize: '1rem' }}>{result.title || result.name}</p>
                  <p style={{ fontSize: '.8rem' }}>{result.description}</p>
                </div>
              </li>
            </Link>
          ))}
          <ButtonSearch>More films</ButtonSearch>
        </UlSearchContainer>
      )}
    </>
  )
}