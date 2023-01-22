import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from 'components/Box';
import { AppBar } from 'components/AppBar/AppBar';

const PhonebookLayout = () => {
  return (
    <Box width="768px" m="0 auto" pb="20px" bg="rgb(239 239 239)">
      <Box
        ml="auto"
        mr="auto"
        mb="20px"
        pt="20px"
        pb="20px"
        width="720px"
        bg="white"
        boxShadow="0 1px 6px black"
        borderBottomLeftRadius="8px"
        borderBottomRightRadius="8px"
        as="header"
      >
        <AppBar />
      </Box>
      <Box pl="20px" as="main">
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
};

export default PhonebookLayout;
