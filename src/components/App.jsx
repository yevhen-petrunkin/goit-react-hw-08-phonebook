import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, addContact } from 'redux/contactsSlice';
import { updateFilter } from 'redux/filterSlice';
import { nanoid } from 'nanoid';
import { Box } from './Box';
import { Heading } from './Heading';
import { FormBox } from './Form';
import { SubHeading } from './SubHeading';
import { Search } from './Search';
import { ContactList } from './ContactList';

export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const deleteContactHandler = id => {
    dispatch(deleteContact(id));
  };

  const checkContactsForMatches = formData => {
    const normalizedName = formData.name.toLowerCase();
    return contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
  };

  const showAlertMessage = contactName =>
    alert(`${contactName} is already in contacts.`);

  const formSubmitHandler = formData => {
    const doesMatch = checkContactsForMatches(formData);
    if (doesMatch) {
      showAlertMessage(formData.name);
      return;
    }
    dispatch(addContact({ id: nanoid(6), ...formData }));
  };

  const searchHandler = evt => {
    const value = evt.currentTarget.value;
    dispatch(updateFilter(value));
  };

  const getVisibleContacts = () => {
    const normalizedSearch = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedSearch)
    );
  };

  const visibleContacts = getVisibleContacts();

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
        <FormBox onSubmit={formSubmitHandler} />
        <Box
          width="720px"
          pl="20px"
          bg="white"
          borderRadius="8px"
          boxShadow="1px 1px 6px black"
          as="section"
        >
          <SubHeading subtitle="Contacts" />
          <Search
            searchLabel="Find contacts by name"
            value={filter}
            onChange={searchHandler}
          />
          <Box height="20em" bg="white">
            <ContactList
              contacts={visibleContacts}
              handleClick={deleteContactHandler}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
