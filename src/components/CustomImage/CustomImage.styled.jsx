import styled from '@emotion/styled';

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  border-radius: 8px;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
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
  right: -40%;
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
