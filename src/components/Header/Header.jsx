import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { Navigation } from 'components/Header/Navigation';
import { AuthNav } from 'components/Header/AuthNav';
import { UserMenu } from 'components/Header/UserMenu';
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
        left: '50%',
        mb: 2,
        px: 4,
        py: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '856px',
        fontSize: 18,
        boxShadow: 3,
      }}
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBar>
  );
};
