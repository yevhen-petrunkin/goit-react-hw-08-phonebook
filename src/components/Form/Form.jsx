import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { StyledForm } from './Form.styled';
import { Formik, Field } from 'formik';
import { TextField } from 'formik-mui';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const showAlertMessage = contactName =>
  alert(`${contactName} is already in contacts.`);

export const FormBox = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const checkContactsForMatches = formData => {
    const normalizedName = formData.name.toLowerCase();
    return contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
  };

  const handleSubmit = (values, { resetForm }) => {
    const doesMatch = checkContactsForMatches(values);
    if (doesMatch) {
      showAlertMessage(values.name);
      return;
    }
    dispatch(addContact(values));
    resetForm();
  };

  const validate = values => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Required';
    } else if (
      !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(
        values.name
      )
    ) {
      errors.name = 'Invalid name';
    }

    if (!values.number) {
      errors.number = 'Required';
    } else if (
      !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(
        values.number
      )
    ) {
      errors.number = 'Invalid number';
    }

    return errors;
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validate={validate}
      onSubmit={handleSubmit}
    >
      <StyledForm autoComplete="off">
        <Box
          sx={{
            pb: 2,
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <Field
            component={TextField}
            name="name"
            label="Name"
            type="text"
            size="small"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            sx={{
              bgcolor: 'rgb(239 239 239)',
            }}
          />
          <Field
            component={TextField}
            name="number"
            label="Number"
            type="tel"
            size="small"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
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
      </StyledForm>
    </Formik>
  );
};
