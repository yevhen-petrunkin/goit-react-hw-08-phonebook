import { Box } from './Box';
import { Heading } from './Heading';
import { FormBox } from './Form';
import { SubHeading } from './SubHeading';
import { Search } from './Search';
import { ContactList } from './ContactList';

export const App = () => {
  return (
    <Box
      width="768px"
      height="100vh"
      m="0 auto"
      pt="20px"
      pb="20px"
      bg="rgb(239 239 239)"
      as="main"
    >
      <Box pl="20px" as="section">
        <Heading title="Phonebook" />
        <FormBox />
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
          <Box pb="20px" minHeight="20em" bg="white">
            <ContactList />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
