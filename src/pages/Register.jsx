import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { RegistrationForm } from 'components/Form/RegistrationForm/RegistrationForm';

const Register = () => {
  return (
    <section>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Registration
      </Typography>
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
