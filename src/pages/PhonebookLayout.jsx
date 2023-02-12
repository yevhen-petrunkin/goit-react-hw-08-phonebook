import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const PhonebookLayout = () => {
  return (
    <Container maxWidth="md" sx={{ pb: 4, height: 'auto' }}>
      <Header />
      <Box as="main" pt="100px">
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </Box>
    </Container>
  );
};

export default PhonebookLayout;
