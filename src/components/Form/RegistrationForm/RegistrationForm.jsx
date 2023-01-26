import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Label, Input } from 'components/Form/FormInput/FormInput.styled';
import { register } from 'redux/operations';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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
        mb: 2,
        p: 2,
        bgcolor: 'white',
        display: 'block',
        borderRadius: '8px',
        boxShadow: 3,
      }}
      autocomplete="off"
      onSubmit={handleSubmit}
    >
      <Box
        sx={{
          pb: 2,
        }}
      >
        <Label>
          Name
          <Input type="text" name="name" value={name} onChange={handleChange} />
        </Label>
        <Label>
          Email
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>
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
