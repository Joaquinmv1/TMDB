import { useParams } from "react-router-dom";
import useGetDetail from "../../hooks/useGetDetail";
import styled from "styled-components";

export const ContainerDetail = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
`
export const ImageBackground = styled.img`
  width: 100%;
  height: 40vh; 
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  image-rendering: auto;
  filter: brightness(.4) contrast(1.1); 
` 

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
        <ImageBackground src={`https://image.tmdb.org/t/p/w1280/${detail.backdrop_path}`} alt={`image ${detail.title}`} />
      </ContainerDetail>
    </>
  )
}