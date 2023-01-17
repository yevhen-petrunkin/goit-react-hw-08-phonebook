import { useSelector } from 'react-redux';
import { selectContacts, filterContacts } from 'redux/selectors';
import { List } from './ContactList.styled';
import { Contact } from './Contact';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(filterContacts);

  const getVisibleContacts = () => {
    const normalizedSearch = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedSearch)
    );
  };

  const visibleContacts = getVisibleContacts();

  return visibleContacts.length ? (
    <List>
      {visibleContacts.map(contact => {
        return <Contact key={contact.name} contact={contact} />;
      })}
    </List>
  ) : (
    <p>Oops... No contacts found.</p>
  );
};
