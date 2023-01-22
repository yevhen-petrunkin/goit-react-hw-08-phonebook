import { Box } from 'components/Box';
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
        width="720px"
        pl="20px"
        bg="white"
        borderRadius="8px"
        boxShadow="1px 1px 6px black"
        as="section"
      >
        <SubHeading subtitle="Contacts" />
        <Search searchLabel="Find contacts by name" />
        <Box pb="20px" minHeight="20em" bg="white" borderRadius="8px">
          <ContactList />
        </Box>
      </Box>
    </>
  );
};

export default Contacts;
