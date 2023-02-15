import { NavMenu, NavLinkStyled } from './Navigation.styled';
import { useMedia } from 'hooks/useMedia';
import Typography from '@mui/material/Typography';
import CottageIcon from '@mui/icons-material/Cottage';
import ContactsIcon from '@mui/icons-material/Contacts';

export const Navigation = () => {
  const { isLarge, isMedium } = useMedia();
  let typographyVar = 'subtitle1';

  if (isLarge) {
    typographyVar = 'h6';
  }

  return (
    <nav>
      <NavMenu>
        <li>
          <NavLinkStyled to="/">
            <CottageIcon />
            {(isLarge || isMedium) && (
              <Typography variant={typographyVar} component="span">
                Home
              </Typography>
            )}
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/contacts">
            <ContactsIcon />
            {(isLarge || isMedium) && (
              <Typography variant={typographyVar} component="span">
                Contacts
              </Typography>
            )}
          </NavLinkStyled>
        </li>
      </NavMenu>
    </nav>
  );
};
