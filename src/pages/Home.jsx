import Box from '@mui/material/Box';
import { useAuth } from 'hooks/useAuth';
import cat from 'images/cat.jpg';
import Typography from '@mui/material/Typography';

const Home = () => {
  const { isLoggedIn } = useAuth();
  return (
    <section>
      <Typography variant="h3" component="h1">
        Phonebook
      </Typography>
      <Box
        sx={{
          pb: 2,
        }}
      >
        {!isLoggedIn && (
          <p style={{ fontSize: '18px', margin: '0' }}>
            To be able to use the application, please, log in or register first.
          </p>
        )}
        <img
          src={cat}
          alt="cat"
          width="100%"
          style={{
            marginTop: '20px',
            borderRadius: '8px',
            boxShadow: 'inset 1px 1px 6px black',
          }}
        />
      </Box>
    </section>
  );
};

export default Home;
