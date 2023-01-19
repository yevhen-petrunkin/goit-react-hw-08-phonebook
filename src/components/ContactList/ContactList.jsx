import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectVisibleContacts,
  selectIsLoading,
  selectError,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { List } from './ContactList.styled';
import { Contact } from './Contact';

export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const visibleContacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Wait, please. We are loading contacts.</p>}
      {error && <p>{error}</p>}
      {!isLoading && visibleContacts.length === 0 && (
        <p>Oops... No contacts found.</p>
      )}
      {!isLoading && visibleContacts.length !== 0 ? (
        <List>
          {visibleContacts.map(contact => {
            return <Contact key={contact.name} contact={contact} />;
          })}
        </List>
      ) : (
        ''
      )}
    </>
  );
};
