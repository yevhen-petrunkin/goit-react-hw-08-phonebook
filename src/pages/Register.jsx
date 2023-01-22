import { Box } from 'components/Box';
import { Heading } from 'components/Heading';
import { RegistrationForm } from 'components/Form/RegistrationForm/RegistrationForm';

const Register = () => {
  return (
    <section>
      <Heading title="Registration" />
      <Box pb="20px">
        <RegistrationForm />
      </Box>
    </section>
  );
};

export default Register;
