import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from 'components/Box';
import { AppBar } from 'components/AppBar/AppBar';

const PhonebookLayout = () => {
  return (
    <Box
      width="768px"
      height="100vh"
      m="0 auto"
      pr="20px"
      pb="20px"
      pl="20px"
      bg="rgb(239 239 239)"
    >
      <header>
        <AppBar />
      </header>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </Box>
  );
};

export default PhonebookLayout;
