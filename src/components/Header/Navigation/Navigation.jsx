import { NavMenu, NavLinkStyled } from './Navigation.styled';
import CottageIcon from '@mui/icons-material/Cottage';
import ContactsIcon from '@mui/icons-material/Contacts';

export const Navigation = () => {
  return (
    <nav>
      <NavMenu>
        <li>
          <NavLinkStyled to="/">
            <CottageIcon />
            Home
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/contacts">
            <ContactsIcon />
            Contacts
          </NavLinkStyled>
        </li>
      </NavMenu>
    </nav>
  );
};
