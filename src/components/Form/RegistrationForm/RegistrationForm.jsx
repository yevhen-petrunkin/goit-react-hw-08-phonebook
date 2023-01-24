import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from 'components/Box';
import { Form } from 'components/Form/Form.styled';
import { Label, Input } from 'components/Form/FormInput/FormInput.styled';
import { SubmitButton } from 'components/SubmitButton';
import { register } from 'redux/operations';

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
    <Form autocomplete="off" onSubmit={handleSubmit}>
      <Box pb="20px">
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
      <SubmitButton type="submit" text="Sign Up" />
    </Form>
  );
};
