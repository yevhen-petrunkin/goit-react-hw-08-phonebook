import Box from '@mui/material/Box';
import { Heading } from 'components/Heading';
import { RegistrationForm } from 'components/Form/RegistrationForm/RegistrationForm';

const Register = () => {
  return (
    <section>
      <Heading title="Registration" />
      <Box
        sx={{
          pb: 2,
        }}
      >
        <RegistrationForm />
      </Box>
    </section>
  );
};

export default Register;
