import { useState } from 'react';
import { HeroImageView } from './HeroImageView';

export const HeroImage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibleClick = () => {
    setIsVisible(!isVisible)
  }

  return (
    <HeroImageView
      handleVisibleClick={handleVisibleClick}
      isVisible={isVisible}
    />
  );
}