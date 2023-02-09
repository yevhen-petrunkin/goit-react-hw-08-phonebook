import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';
import { FormBox } from 'components/Form';
import { ContactList } from 'components/ContactList';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const Contacts = () => {
  const dispatch = useDispatch();
  return (
    <>
      <section>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Phonebook
        </Typography>
        <FormBox />
      </section>
      <section>
        <Box
          sx={{
            p: 2,
            bgcolor: 'white',
            borderRadius: '8px',
            boxShadow: 3,
          }}
        >
          <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
            Contacts
          </Typography>
          <TextField
            name="search"
            label="Search Name"
            type="text"
            size="small"
            onChange={evt => dispatch(updateFilter(evt.currentTarget.value))}
            sx={{
              mb: 3,
              bgcolor: 'rgb(239 239 239)',
            }}
          />
          <Box
            sx={{
              minHeight: '20em',
              bgcolor: 'white',
              display: 'block',
              borderRadius: '8px',
            }}
          >
            <ContactList />
          </Box>
        </Box>
      </section>
    </>
  );
};

export default Contacts;
