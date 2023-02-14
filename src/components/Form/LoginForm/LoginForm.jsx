import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';
import { StyledForm } from './LoginForm.styled';
import { Formik, Field } from 'formik';
import { TextField } from 'formik-mui';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(logIn({ email, password }));
    resetForm();
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      <StyledForm autoComplete="on">
        <Box
          sx={{
            pb: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Field
            component={TextField}
            type="email"
            name="email"
            label="Email"
            size="small"
            sx={{
              maxWidth: '300px',
              bgcolor: 'rgb(239 239 239)',
            }}
          />

          <Field
            component={TextField}
            type="password"
            name="password"
            label="Password"
            size="small"
            sx={{
              maxWidth: '300px',
              bgcolor: 'rgb(239 239 239)',
            }}
          />
        </Box>
        <Button
          variant="contained"
          size="medium"
          sx={{
            px: 2,
            py: 1,
            textTransform: 'none',
            color: 'black',
            bgcolor: 'rgb(239 239 239)',
            boxShadow: 3,
            ':hover': {
              color: 'black',
              bgcolor: 'white',
            },
          }}
          type="submit"
        >
          Log In
        </Button>
      </StyledForm>
    </Formik>
  );
};
