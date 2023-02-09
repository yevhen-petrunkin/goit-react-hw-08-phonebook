import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavMenu = styled.ul`
  padding: 0;
  display: flex;
  gap: 20px;
  list-style: none;
`;

export const NavLinkStyled = styled(NavLink)`
  padding-top: 20px;
  padding-bottom: 20px;
  color: inherit;
  text-decoration: none;
  &.active {
    text-decoration: underline;
  }
`;
