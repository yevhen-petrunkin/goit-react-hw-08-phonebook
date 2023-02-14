import Typography from '@mui/material/Typography';
import { RegistrationForm } from 'components/Form/RegistrationForm';

const Register = () => {
  return (
    <section>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Registration
      </Typography>
      <RegistrationForm />
    </section>
  );
};

export default Register;
