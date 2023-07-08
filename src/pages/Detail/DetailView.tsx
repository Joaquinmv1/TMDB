import { AiTwotoneStar } from "react-icons/ai"
import { ContainerDetail, Image, ContainerInfo, ContentRight, ImageBackground, OverviewSection, SectionsList, Loader, Shadow } from "."
import { Components, Genre } from "./types";
import { Dna } from "react-loader-spinner";

interface Props {
  isSelected: string;
  handleSelectedClick: (section: string) => void;
  isLoading: boolean;
  detail: any;
  sectionComponents: Components
}

export const DetailView = (props: Props) => {
  if (props.isLoading) {
    return <Loader><Dna /></Loader>
  }

  return (
    <>
      <ContainerDetail style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${props.detail.data.backdrop_path || props.detail.data.poster_path})` }}>
        <Shadow />
        {/* <ImageBackground src={`https://image.tmdb.org/t/p/w1280/${props.detail.data.backdrop_path || props.detail.data.poster_path}`} alt={`image banner ${props.detail.data.title}`} /> */}
        <ContainerInfo>
          <Image src={`https://image.tmdb.org/t/p/w500/${props.detail.data.poster_path}`} alt={`image ${props.detail.data.name}`} />
          <ContentRight>
            <div className="details">
              <h2 style={{ paddingBottom: '.8rem' }}>{props.detail.data.name || props.detail.data.title}</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <p style={{ fontSize: '1.2rem', textAlign: 'center' }}>{props.detail.data.vote_average}</p>
                <AiTwotoneStar />
              </div>
            </div>
            <p style={{ color: '#afadad', fontWeight: 'bold' }}>{props.detail.data.first_air_date || props.detail.data.release_date} | type: {props.detail.data.last_episode_to_air?.episode_number ?? 'Movie'} | 16+</p>
            <div style={{ display: 'flex', gap: '10px', paddingBlock: '1rem' }}>
              {props.detail.data.genres.map((genre: Genre) => {
                return (
                  <p style={{ padding: '.5rem 1.5rem', borderRadius: '20px', border: '2px solid #fff', fontSize: '.8rem', fontWeight: 'bold' }} key={genre.id}>
                    {genre.name}
                  </p>
                )
              })}
            </div>
            <SectionsList handleSelectedClick={props.handleSelectedClick} isSelected={props.isSelected} />
            {props.isSelected === 'overview' ? <OverviewSection detail={props.detail} /> : props.sectionComponents[props.isSelected]}
          </ContentRight>
        </ContainerInfo>
     
      </ContainerDetail>
    </>
  )
}