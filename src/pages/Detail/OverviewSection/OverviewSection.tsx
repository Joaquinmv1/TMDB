import styled from "styled-components"
import { CastList } from ".."

interface Genre {
  id: number
  name: String
}

export const InfoContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 4px;
`

export const OverviewSection = ({ detail }: any) => {
  return (
    <div>
      <h5>{detail.data.overview}</h5>
      <InfoContainer>
        <p>
          <span style={{ color: "#bababa" }}>Country:</span>{" "}
          {detail.data.origin_country && detail.data.origin_country[0]
            ? detail.data.origin_country[0]
            : detail.data.production_countries.map((country: any) => country.name).join(" ")}
        </p>
        <p><span style={{ color: "#bababa" }}>Popularity:</span> {detail.data.popularity} </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{ color: "#bababa" }}> Genre:</span> {detail.data.genres.map((genre: Genre) => {
            return <p key={genre.id}>{genre.name}</p>
          })}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{ color: "#bababa" }}>languages: </span> <p style={{ fontWeight: 'normal' }}>{detail.data.original_language.toUpperCase()}</p>
        </div>
        <p><span style={{ color: "#bababa" }}>Homepage:</span> {detail.data.homepage}</p>
      </InfoContainer>
      <CastList detail={detail} />
    </div>
  )
}