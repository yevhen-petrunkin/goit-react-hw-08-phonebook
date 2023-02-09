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
    <>
      <header>
        <Container maxWidth="md" sx={{ pb: 2, bgcolor: 'rgb(239 239 239)' }}>
          <Box
            style={{
              borderBottomLeftRadius: '8px',
              borderBottomRightRadius: '8px',
            }}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: 18,
              px: 4,
              py: 1,
              color: '#fff',
              bgcolor: '#1976d2',
              boxShadow: 3,
            }}
          >
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Box>
        </Container>
      </header>
      <main>
        <Container
          maxWidth="md"
          sx={{ px: 2, pb: 4, bgcolor: 'rgb(239 239 239)' }}
        >
          <Suspense fallback={<p>Loading...</p>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default PhonebookLayout;
