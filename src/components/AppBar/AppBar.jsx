import { Navbar } from './AppBar.styled';
import { Navigation } from './Navigation/Navigation';

export const AppBar = () => {
  return (
    <Navbar>
      <Navigation />

      <div>
        <span>Register</span>
        <span>Log In</span>
      </div>
      <div>
        <p>mango@mail.com</p>
        <button type="button">Log Out</button>
      </div>
    </Navbar>
  );
};
