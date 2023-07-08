import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetDetail } from "../../hooks";
import { useQuery } from 'react-query'
import { Components, DetailView, MoreLikeThisSection, OverviewSection, TrailersContent } from ".";
import { getDetailElement } from "../../services/tmdb.api";

export const Detail = () => {
  const { type, id } = useParams();
  const [isSelected, setIsSelected] = useState('overview');
  const { data: detail, isLoading } = useQuery(['detail', type, id], () => getDetailElement(type, id));
  // const { detail, isLoading } = useGetDetail({ type, id });

  const sectionComponents: Components = {
    'overview': <OverviewSection />,
    'trailers': <TrailersContent detail={detail} />,
    'more like this': <MoreLikeThisSection detail={detail} />,
  };

  const handleSelectedClick = (section: string) => {
    setIsSelected(section);
  }

  // if(isLoading) {
  //   return <p>sadsa</p>
  // }

  return (
    <>
      <DetailView
        sectionComponents={sectionComponents}
        isSelected={isSelected}
        handleSelectedClick={handleSelectedClick}
        detail={detail}
        isLoading={isLoading}
      />
    </>
  )
}

