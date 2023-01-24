import { AuthMenu, NavLinkStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthMenu>
      <li>
        <NavLinkStyled to="/register">Register</NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/login">Login</NavLinkStyled>
      </li>
    </AuthMenu>
  );
};
