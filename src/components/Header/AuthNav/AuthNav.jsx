import { AuthMenu, NavLinkStyled } from './AuthNav.styled';
import { useMedia } from 'hooks/useMedia';
import Typography from '@mui/material/Typography';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

export const AuthNav = () => {
  const { isLarge, isMedium } = useMedia();
  let typographyVar = 'subtitle1';

  if (isLarge) {
    typographyVar = 'h6';
  }

  return (
    <AuthMenu>
      <li>
        <NavLinkStyled to="/register">
          <AppRegistrationIcon />
          {(isLarge || isMedium) && (
            <Typography variant={typographyVar} component="span">
              Register
            </Typography>
          )}
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/login">
          <LoginIcon />
          {(isLarge || isMedium) && (
            <Typography variant={typographyVar} component="span">
              Log In
            </Typography>
          )}
        </NavLinkStyled>
      </li>
    </AuthMenu>
  );
};
