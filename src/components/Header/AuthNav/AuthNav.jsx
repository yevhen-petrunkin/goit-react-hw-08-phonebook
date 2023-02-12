import { AuthMenu, NavLinkStyled } from './AuthNav.styled';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

export const AuthNav = () => {
  return (
    <AuthMenu>
      <li>
        <NavLinkStyled to="/register">
          <AppRegistrationIcon />
          Register
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/login">
          <LoginIcon />
          Login
        </NavLinkStyled>
      </li>
    </AuthMenu>
  );
};
