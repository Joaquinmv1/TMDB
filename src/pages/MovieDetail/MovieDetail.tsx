import { useParams } from "react-router-dom";
import useGetDetail from "../../hooks/useGetDetail";
import { ContainerDetail, ContainerInfo, ImageBackground, Image, ContentRight, Sections } from "./style";
import { useState } from "react";
import { Dna } from 'react-loader-spinner'
import { CastList } from ".";
import { AiTwotoneStar } from 'react-icons/ai';
import { OverviewSection } from "./OverviewSection/OverviewSection";
import { TrailersContent } from "..";

interface Genre {
  id: number
  name: String
}

export const MovieDetail = () => {
  const { type, id } = useParams();
  const [isSelected, setIsSelected] = useState('overview');

  const handleSelectedClick = (section: string) => {
    setIsSelected(section)
  }

  const { detail, isLoading } = useGetDetail({ type, id })

  if (!isLoading) {
    return <Dna />
  }

  const style = {
    padding: '.5rem 1.5rem',
    borderRadius: '20px',
    border: '2px solid #fff',
    fontSize: '.8rem',
    fontWeight: 'bold'
  }

  const sections = ['overview', 'trailers & more', 'more like this', 'details'];
  const sectionComponents = {
    overview: <OverviewSection detail={detail} />,
    'trailers & more': <TrailersContent />,
    // 'more like this': <MoreLikeThisSection detail={detail} />,
    // details: <DetailsSection detail={detail} />
  };

  return (
    <>
      <ContainerDetail>
        <div>
          <ImageBackground src={`https://image.tmdb.org/t/p/w1280/${detail.json.backdrop_path}`} alt={`image banner ${detail.json.title}`} />
        </div>
        <ContainerInfo>
          <Image src={`https://image.tmdb.org/t/p/w500/${detail.json.poster_path}`} alt={`image ${detail.json.name}`} />
          <ContentRight>
            <div className="aaaa">
              <h2>{detail.json.name || detail.json.title}</h2>
              <p style={{ fontSize: '1.2rem', textAlign: 'center' }}>{detail.json.vote_average} <AiTwotoneStar /></p>
            </div>
            <p style={{ color: '#afadad', fontWeight: 'bold' }}>{detail.json.first_air_date} | Caps: {detail.json.last_episode_to_air.episode_number || 'movie'} | 16+</p>
            <div style={{ display: 'flex', gap: '10px', paddingBlock: '1rem' }}>
              {detail.json.genres.map((genre: Genre) => {
                return <p style={style} key={genre.id}>{genre.name}</p>
              })}
            </div>
            <Sections>
              <ul>
                {sections.map(section => {
                  const isSelectedClass = isSelected === section ? 'selected' : '';
                  return <li key={section} onClick={() => handleSelectedClick(section)} className={isSelectedClass}>{section}</li>
                })}
              </ul>
            </Sections>
            {isSelected === 'trailers & more' ? <TrailersContent /> : sectionComponents[isSelected]}
            <h5>{detail.json.overview}</h5>
            <div>
              <p style={{ color: "#bababa" }}>starring : </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ color: "#bababa" }}> Genre:</span> {detail.json.genres.map((genre: Genre) => {
                  return <p key={genre.id}>{genre.name}</p>
                })}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ color: "#bababa" }}>languages: </span> <p style={{ fontWeight: 'normal' }}>{detail.json.original_language.toUpperCase()}</p>
              </div>
            </div>
            <CastList detail={detail} />
          </ContentRight>
        </ContainerInfo>
      </ContainerDetail>
    </>
  )
}