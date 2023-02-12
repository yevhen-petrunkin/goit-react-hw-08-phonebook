import { useAuth } from 'hooks/useAuth';
import { CustomImage } from 'components/CustomImage/CustomImage';
import Typography from '@mui/material/Typography';
import cat from 'images/cat-01.jpg';

const Home = () => {
  const { isLoggedIn } = useAuth();
  return (
    <section>
      <Typography variant="h3" component="h1" mb="20px">
        Phonebook
      </Typography>
      {!isLoggedIn && (
        <Typography variant="body1" component="h2" pt="10px">
          To be able to use the application, please, log in or register first.
        </Typography>
      )}
      <CustomImage imgWidth="100%" imgHeight="76vh" imgUrl={cat} />
    </section>
  );
};

export default Home;
