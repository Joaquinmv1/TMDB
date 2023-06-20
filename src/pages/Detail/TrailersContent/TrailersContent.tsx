import styled from "styled-components"
// import { TrailerContainer } from ".."

export const TrailerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  
  iframe{
    padding-block: 1rem;
    width: 100%;
    aspect-ratio: 16/9;
  }
`

export const TrailersContent = ({ detail }: any) => {
  return (
    <>
      <TrailerContainer>
        {detail.trailers.slice(0, 1).map((trailer: any) => (
          <iframe
            key={trailer.id}
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title={trailer.name}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ))}
      </TrailerContainer>
    </>
  )
}