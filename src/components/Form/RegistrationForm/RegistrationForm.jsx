import { Box } from 'components/Box';
import { Form } from 'components/Form/Form.styled';
import { Label, Input } from 'components/Form/FormInput/FormInput.styled';
import { SubmitButton } from 'components/SubmitButton';

export const RegistrationForm = () => {
  return (
    <Form autocomplete="off">
      <Box pb="20px">
        <Label>
          Name
          <Input type="text" />
        </Label>
        <Label>
          Email
          <Input type="email" />
        </Label>
        <Label>
          Password
          <Input type="password" />
        </Label>
      </Box>
      <SubmitButton type="submit" text="Sign Up" />
    </Form>
  );
};
