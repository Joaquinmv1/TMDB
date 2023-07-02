import { useState } from 'react';
import { HeroSlideView } from './HeroSlideView';

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