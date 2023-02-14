import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/operations';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetState = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(register({ name, email, password }));
    resetState();
  };

  return (
    <Box
      component="form"
      sx={{
        p: 2,
        mb: '43vh',
        bgcolor: 'white',
        display: 'block',
        borderRadius: '8px',
        boxShadow: 3,
      }}
      autoComplete="on"
      onSubmit={handleSubmit}
    >
      <Box
        sx={{
          pb: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <TextField
          type="text"
          name="name"
          label="Name"
          size="small"
          value={name}
          onChange={handleChange}
          sx={{
            maxWidth: '300px',
            bgcolor: 'rgb(239 239 239)',
          }}
        />
        <TextField
          type="email"
          name="email"
          label="Email"
          size="small"
          value={email}
          onChange={handleChange}
          sx={{
            maxWidth: '300px',
            bgcolor: 'rgb(239 239 239)',
          }}
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          size="small"
          value={password}
          onChange={handleChange}
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
            bgcolor: 'white',
            color: 'black',
          },
        }}
        type="submit"
      >
        Sign Up
      </Button>
    </Box>
  );
};
