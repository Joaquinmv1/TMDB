import { useState } from "react";
import { InputContainer } from "..";
import { CarrouselButtons, ContainerHeroShow, ContainerShow } from "./style";

const carrouselImgs = ['black-mirror-cr.jpg', 'harry potter.jpg', 'SPIDER-MAN ACROSS THE SPIDER-VERSE_Thumb.jpg'];

export const CarrouselDetail = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentImg, setCurrentImg] = useState(carrouselImgs[0]);

  const selectedImg = () => {
    const condition = selectedIndex < carrouselImgs.length - 1;
    const newIndex = condition ? selectedIndex + 1 : 0;
    setSelectedIndex(newIndex);
    setCurrentImg(carrouselImgs[selectedIndex]);
  }

  const previousImg = () => {
    const condition = selectedIndex > carrouselImgs.length - 1;
    const newIndex = condition ? selectedIndex - 1 : carrouselImgs.length - 1;
    setSelectedIndex(newIndex);
    setCurrentImg(carrouselImgs[selectedIndex]);
  }

  return (
    <>
      <ContainerHeroShow>
        <ContainerShow>
          <img src={currentImg} alt="" />
          <CarrouselButtons>
            <button onClick={selectedImg}>{'<'}</button>
            <button onClick={selectedImg}>{'>'}</button>
          </CarrouselButtons>
          <InputContainer>
            {carrouselImgs.map((_, i) => {
              return <input key={i} type="radio" />
            })}
          </InputContainer>
        </ContainerShow>
      </ContainerHeroShow>
    </>
  )
}