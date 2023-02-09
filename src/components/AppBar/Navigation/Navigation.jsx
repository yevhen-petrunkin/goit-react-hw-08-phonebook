import { NavMenu, NavLinkStyled } from './Navigation.styled';
import CottageIcon from '@mui/icons-material/Cottage';
import ContactsIcon from '@mui/icons-material/Contacts';

export const Navigation = () => {
  return (
    <nav>
      <NavMenu>
        <li
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <CottageIcon />
          <NavLinkStyled to="/">Home</NavLinkStyled>
        </li>
        <li
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <ContactsIcon />
          <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
        </li>
      </NavMenu>
    </nav>
  );
};
