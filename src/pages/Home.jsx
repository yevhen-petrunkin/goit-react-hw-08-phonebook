import { useAuth } from 'hooks/useAuth';
import { useMedia } from 'hooks/useMedia';
import { CustomImage } from 'components/CustomImage';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import cat from 'images/cat-01.jpg';

const Home = () => {
  const { isLoggedIn } = useAuth();
  const { isMedium } = useMedia();

  let typographyVar = 'h4';
  let customImgHeight = '80vh';

  if (isMedium) {
    typographyVar = 'h3';
    customImgHeight = '75vh';
  }

  return (
    <section>
      <Box mb="20px">
        <Typography variant={typographyVar} component="h1">
          Phonebooth
        </Typography>

        {!isLoggedIn && (
          <Typography variant="body1" component="h2" pt="10px">
            To be able to use the application, please, log in or register first.
          </Typography>
        )}
      </Box>
      <CustomImage
        imgWidth="100%"
        imgHeight={customImgHeight}
        imgUrl={cat}
        imgCaption="Phonebooth"
      />
    </section>
  );
};

export default Home;
