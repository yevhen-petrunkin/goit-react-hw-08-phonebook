import { useState } from 'react';
import { ImageWrapper, BackgroundBox, CaptionBox } from './CustomImage.styled';

export const CustomImage = ({ imgWidth, imgHeight, imgUrl, imgCaption }) => {
  const url = `url('${imgUrl}')`;
  const [translateImg, setTranslateImg] = useState('');
  const [translateCap, setTranslateCap] = useState('');

  const handleMouseMove = evt => {
    const x = evt.pageX / window.innerWidth;
    const y = evt.pageY / window.innerHeight;
    setTranslateImg(`translate(-${x * 30}px, -${y * 30}px) scale(1.02)`);
    setTranslateCap(`translate(${x * 60}px, ${y * 60}px)`);
  };

  return (
    <ImageWrapper
      style={{ width: imgWidth, height: imgHeight }}
      onMouseMove={handleMouseMove}
      onMouseOut={() => setTranslateImg('scale(1.0)')}
    >
      <BackgroundBox
        style={{ backgroundImage: url, transform: translateImg }}
      />
      <CaptionBox style={{ transform: translateCap }}>{imgCaption}</CaptionBox>
    </ImageWrapper>
  );
};
