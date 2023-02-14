import styled from '@emotion/styled';

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  border-radius: 8px;
  box-shadow: 0 0 6px black;
  overflow: hidden;
`;

export const BackgroundBox = styled.div`
  position: absolute;
  width: 110%;
  height: 110%;
  background-position: center center;
  background-size: cover;
  cursor: all-scroll;
  transition: transform 300ms linear;
`;

export const CaptionBox = styled.div`
  position: absolute;
  right: -60%;
  bottom: -85%;
  z-index: 1;
  width: 110%;
  height: 110%;
  font-size: 32px;
  text-shadow: 2px 2px 4px black;
  color: white;
  cursor: all-scroll;
  transition: transform 300ms linear;
`;
