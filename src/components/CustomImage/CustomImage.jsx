import { useState } from 'react';
import { ImageWrapper, BackgroundBox } from './CustomImage.styled';

export const CustomImage = ({ imgWidth, imgHeight, imgUrl }) => {
  const url = `url('${imgUrl}')`;
  const [translate, setTranslate] = useState('');

  const handleMouseMove = evt => {
    const x = evt.pageX / window.innerWidth;
    const y = evt.pageY / window.innerHeight;
    setTranslate(`translate(-${x * 30}px, -${y * 30}px)`);
  };

  return (
    <ImageWrapper
      style={{ width: imgWidth, height: imgHeight }}
      onMouseMove={handleMouseMove}
    >
      <BackgroundBox style={{ backgroundImage: url, transform: translate }} />
    </ImageWrapper>
  );
};
