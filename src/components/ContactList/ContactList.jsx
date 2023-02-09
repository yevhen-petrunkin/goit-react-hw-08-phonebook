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
import cat from 'images/cat-02.jpg';
import { Box } from '@mui/material';

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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <img
            src={cat}
            alt="cat"
            width="55%"
            style={{
              borderRadius: '8px',
              boxShadow: 'inset 1px 1px 6px black',
            }}
          />
          <List>
            {visibleContacts.map(contact => {
              return <Contact key={contact.name} contact={contact} />;
            })}
          </List>
        </Box>
      ) : (
        ''
      )}
    </>
  );
};
