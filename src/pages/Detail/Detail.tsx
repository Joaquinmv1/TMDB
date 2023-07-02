import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetDetail } from "../../hooks";
import { Components, DetailView, MoreLikeThisSection, OverviewSection, TrailersContent } from ".";

export const Detail = () => {
  const { type, id } = useParams();
  const [isSelected, setIsSelected] = useState('overview');
  const { detail, isLoading } = useGetDetail({ type, id });

  const sectionComponents: Components = {
    'overview': <OverviewSection />,
    'trailers': <TrailersContent detail={detail} />,
    'more like this': <MoreLikeThisSection detail={detail} />,
  };

  const handleSelectedClick = (section: string) => {
    setIsSelected(section);
  }

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