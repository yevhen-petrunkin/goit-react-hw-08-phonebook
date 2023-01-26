import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
    dispatch(addContact(formData));
    reset();
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
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <TextField
          name="name"
          label="Name"
          type="text"
          size="small"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleInputChange}
          value={name}
          required
          sx={{
            bgcolor: 'rgb(239 239 239)',
          }}
        />
        <TextField
          name="number"
          label="Number"
          type="tel"
          size="small"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleInputChange}
          value={number}
          required
          sx={{
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
        Add Contact
      </Button>
    </Box>
  );
};
