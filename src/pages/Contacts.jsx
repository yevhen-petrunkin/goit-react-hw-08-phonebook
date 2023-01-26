import Box from '@mui/material/Box';
import { Heading } from 'components/Heading';
import { FormBox } from 'components/Form';
import { SubHeading } from 'components/SubHeading';
import { Search } from 'components/Search';
import { ContactList } from 'components/ContactList';

const Contacts = () => {
  return (
    <>
      <section>
        <Heading title="Phonebook" />
        <FormBox />
      </section>
      <Box
        component="section"
        sx={{
          pl: 2,
          bgcolor: 'white',
          borderRadius: '8px',
          boxShadow: 3,
        }}
      >
        <SubHeading subtitle="Contacts" />
        <Search searchLabel="Find contacts by name" />
        <Box
          sx={{
            pb: 2,
            minHeight: '20em',
            bgcolor: 'white',
            display: 'block',
            borderRadius: '8px',
          }}
        >
          <ContactList />
        </Box>
      </Box>
    </>
  );
};

export default Contacts;
