import { useMedia } from 'hooks/useMedia';
import Typography from '@mui/material/Typography';
import { LoginForm } from 'components/Form/LoginForm';

const Login = () => {
  const { isSmall } = useMedia();

  let typographyVar = 'h5';

  if (isSmall) {
    typographyVar = 'h4';
  }

  return (
    <section>
      <Typography variant={typographyVar} component="h1" sx={{ mb: 2 }}>
        Log In
      </Typography>

      <LoginForm />
    </section>
  );
};

export default Login;
