import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { nanoid } from 'nanoid';
import { Box } from '../Box';
import { Form } from './Form.styled';
import { FormName, FormNumber } from './FormInput';
import { SubmitButton } from '../SubmitButton';

const showAlertMessage = contactName =>
  alert(`${contactName} is already in contacts.`);

export const FormBox = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const checkContactsForMatches = formData => {
    const normalizedName = formData.name.toLowerCase();
    return contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const formData = { name, number };
    const doesMatch = checkContactsForMatches(formData);
    if (doesMatch) {
      showAlertMessage(formData.name);
      return;
    }
    dispatch(addContact({ id: nanoid(6), ...formData }));

    reset();
  };

  return (
    <Form autocomplete="off" onSubmit={handleSubmit}>
      <Box pb="20px" display="flex" alignItems="center" style={{ gap: '20px' }}>
        <FormName value={name} onChange={handleInputChange} />
        <FormNumber value={number} onChange={handleInputChange} />
      </Box>
      <SubmitButton type="submit" text="Add Contact" />
    </Form>
  );
};
