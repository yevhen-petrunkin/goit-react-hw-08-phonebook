import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { Navigation } from 'components/AppBar/Navigation/Navigation';
import { AuthNav } from 'components/AppBar/AuthNav/AuthNav';
import { UserMenu } from 'components/AppBar/UserMenu/UserMenu';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

const PhonebookLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Container
      maxWidth="md"
      sx={{ px: 2, pb: 4, height: '100vh', bgcolor: 'rgb(239 239 239)' }}
    >
      <header>
        <AppBar
          position="static"
          color="primary"
          style={{
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px',
          }}
          sx={{
            mb: 2,
            px: 4,
            boxShadow: 3,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: 18,
            }}
          >
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Box>
        </AppBar>
      </header>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default PhonebookLayout;
