import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useMedia } from 'hooks/useMedia';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import Box from '@mui/material/Box';

const PhonebookLayout = () => {
  const { isLarge, isMedium } = useMedia();
  let mainPt = '80px';

  if (isLarge || isMedium) {
    mainPt = '100px';
  }

  return (
    <Box
      sx={{
        mx: 'auto',
        px: '20px',
        height: 'auto',
        boxSizing: 'border-box',
        maxWidth: '992px',
      }}
    >
      <Header />
      <Box as="main" pt={mainPt} pb="20px">
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </Box>
      <Footer />
    </Box>
  );
};

export default PhonebookLayout;
