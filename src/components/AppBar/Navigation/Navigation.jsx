import { NavMenu, NavLinkStyled } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <NavMenu>
        <li>
          <NavLinkStyled to="/">Home</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
        </li>
      </NavMenu>
    </nav>
  );
};
