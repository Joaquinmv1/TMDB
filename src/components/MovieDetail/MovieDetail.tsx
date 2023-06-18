import { useParams } from "react-router-dom";
import useGetDetail from "../../hooks/useGetDetail";
import { ContainerDetail, ContainerInfo, ImageBackground, Image, ContentRight } from "./style";

interface Genre{
  id:number
  name: string
}

export const MovieDetail = () => {
  const { type, id } = useParams();

  const { detail } = useGetDetail({ type, id })

  if (!detail) {
    return <p>Error propiedas undefined</p>
  }
  
  console.log(detail);

  return (
    <>
      <ContainerDetail>
        <div>
          <ImageBackground src={`https://image.tmdb.org/t/p/w1280/${detail.backdrop_path}`} alt={`image banner ${detail.title}`} />
        </div>
        <ContainerInfo>
          <Image src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`} alt={`image ${detail.name}`} />
          <ContentRight>
            <div className="aaaa">
              <h2>{detail.name || detail.title}</h2>
              <p style={{ fontSize: '1.2rem' }}>{detail.vote_average}</p>
            </div>
            <div style={{display: 'flex', gap: '10px'}}>
              {detail.genres.map((genre:Genre) => {
                return <p key={genre.id}>{genre.name}</p>
              })}
            </div>
            <p>{detail.first_air_date} | cap: 11 | 16+ </p>
            <h5>{detail.overview}</h5>
          </ContentRight>
        </ContainerInfo>
      </ContainerDetail>
    </>
  )
}