import styled from '@emotion/styled';

export const FooterMenu = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style: none;
  color: #ffffff;
`;

export const FooterLink = styled.a`
  color: currentColor;
  transition: color 300ms ease;

  &:hover,
  &:focus {
    color: rgba(255, 255, 255, 0.726);
  }
`;
