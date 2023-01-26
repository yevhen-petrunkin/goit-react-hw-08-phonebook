import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { LoginForm } from 'components/Form/LoginForm/LoginForm';

const Login = () => {
  return (
    <section>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Log In
      </Typography>
      <Box
        sx={{
          pb: 2,
        }}
      >
        <LoginForm />
      </Box>
    </section>
  );
};

export default Login;
