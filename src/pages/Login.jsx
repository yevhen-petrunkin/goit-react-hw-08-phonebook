import { Box } from 'components/Box';
import { Heading } from 'components/Heading';
import { LoginForm } from 'components/Form/LoginForm/LoginForm';

const Login = () => {
  return (
    <section>
      <Heading title="Log In" />
      <Box pb="20px">
        <LoginForm />
      </Box>
    </section>
  );
};

export default Login;
