import Box from '@mui/material/Box';
import { Heading } from 'components/Heading';
import { LoginForm } from 'components/Form/LoginForm/LoginForm';

const Login = () => {
  return (
    <section>
      <Heading title="Log In" />
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
