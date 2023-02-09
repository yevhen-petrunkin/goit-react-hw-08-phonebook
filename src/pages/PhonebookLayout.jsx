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
    <Container maxWidth="md" sx={{ pb: 4, height: 'auto' }}>
      <AppBar
        position="fixed"
        style={{
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
          transform: 'translateX(-50%)',
        }}
        sx={{
          maxWidth: '852px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 18,
          left: '50%',
          mb: 2,
          px: 4,
          boxShadow: 3,
        }}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </AppBar>
      <Box as="main" pt="100px">
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </Box>
    </Container>
  );
};

export default PhonebookLayout;
