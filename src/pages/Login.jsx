import Typography from '@mui/material/Typography';
import { LoginForm } from 'components/Form/LoginForm';

const Login = () => {
  return (
    <section>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Log In
      </Typography>
      <LoginForm />
    </section>
  );
};

export default Login;
