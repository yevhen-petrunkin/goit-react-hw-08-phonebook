import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { Navigation } from 'components/Header/Navigation/Navigation';
import { AuthNav } from 'components/Header/AuthNav/AuthNav';
import { UserMenu } from 'components/Header/UserMenu/UserMenu';
import AppBar from '@mui/material/AppBar';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <AppBar
      position="fixed"
      style={{
        borderBottomLeftRadius: '8px',
        borderBottomRightRadius: '8px',
        transform: 'translateX(-50%)',
      }}
      sx={{
        maxWidth: '856px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 18,
        left: '50%',
        mb: 2,
        px: 4,
        py: 1,
        boxShadow: 3,
      }}
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBar>
  );
};
