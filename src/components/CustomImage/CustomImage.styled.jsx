import styled from '@emotion/styled';

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  border-radius: 8px;
  box-shadow: inset 0 0 6px black;
  overflow: hidden;
`;

export const BackgroundBox = styled.div`
  position: absolute;
  width: 110%;
  height: 110%;
  background-position: center center;
  background-size: cover;
  transition: transform 300ms linear;
`;
