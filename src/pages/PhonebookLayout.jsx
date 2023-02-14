import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const PhonebookLayout = () => {
  return (
    <Container maxWidth="md" sx={{ height: 'auto' }}>
      <Header />
      <Box as="main" pt="100px" pb="20px">
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </Box>
      <Footer />
    </Container>
  );
};

export default PhonebookLayout;
