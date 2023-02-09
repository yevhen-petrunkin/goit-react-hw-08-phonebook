import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { Navigation } from 'components/AppBar/Navigation/Navigation';
import { AuthNav } from 'components/AppBar/AuthNav/AuthNav';
import { UserMenu } from 'components/AppBar/UserMenu/UserMenu';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';

const PhonebookLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Container
      maxWidth="md"
      sx={{ pb: 4, height: '100vh', bgcolor: 'rgb(239 239 239)' }}
    >
      <AppBar
        position="static"
        style={{
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
        }}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 18,
          mb: 2,
          px: 4,
          boxShadow: 3,
        }}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </AppBar>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default PhonebookLayout;
