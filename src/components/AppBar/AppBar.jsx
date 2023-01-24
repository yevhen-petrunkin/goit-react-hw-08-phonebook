import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { BarBox } from './AppBar.styled';
import { Navigation } from './Navigation/Navigation';
import { AuthNav } from './AuthNav/AuthNav';
import { UserMenu } from './UserMenu/UserMenu';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <BarBox>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </BarBox>
  );
};
