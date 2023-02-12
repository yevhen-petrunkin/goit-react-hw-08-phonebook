import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthMenu = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
  list-style: none;
`;

export const NavLinkStyled = styled(NavLink)`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
  transition: color 300ms ease;

  &.active {
    text-decoration: underline;
  }

  &:hover,
  &:focus {
    color: rgba(255, 255, 255, 0.726);
  }
`;
