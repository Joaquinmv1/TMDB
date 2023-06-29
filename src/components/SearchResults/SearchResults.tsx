import styled from "styled-components"
import { BASE_URL } from "../../constants/const"

interface SearchProps {
  data: any
  searchTerm: string
}

export const UlSearchContainer = styled.ul`
position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  max-height: 300px;
  overflow-y: auto;

  li {
    display: flex;
    gap: 10px;
  }

  li p {
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export const SearchResults = ({ data, searchTerm }: SearchProps) => {
  return (
    <>
      {data && searchTerm.length >= 3 && (
        <UlSearchContainer>
          {data.results.slice(0, 5).map((result) => (
            <li key={result.id}>
              <img width={100} src={`${BASE_URL}${result.backdrop_path}`} alt="" />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p style={{fontSize: '1rem'}}>{result.title || result.name}</p>
                <p style={{fontSize: '.8rem'}}>{result.overview}</p>
              </div>
            </li>
          ))}
        </UlSearchContainer>
      )}
    </>
  )
}