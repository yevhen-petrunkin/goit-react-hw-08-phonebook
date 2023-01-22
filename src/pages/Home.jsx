import { Box } from 'components/Box';
import { Heading } from 'components/Heading';

const Home = () => {
  return (
    <section>
      <Heading title="Phonebook" />
      <Box pb="20px">
        <p style={{ fontSize: '18px' }}>
          To be able to use the application, please, log in or register first.
        </p>
      </Box>
    </section>
  );
};

export default Home;
