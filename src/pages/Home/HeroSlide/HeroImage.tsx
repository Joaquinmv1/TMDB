import { useState } from 'react';
import { HeroSlideView } from './HeroImageView';

export const HeroSlide = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibleClick = () => {
    setIsVisible(!isVisible)
  }

  return (
    <HeroSlideView
      handleVisibleClick={handleVisibleClick}
      isVisible={isVisible}
    />
  );
}