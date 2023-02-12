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
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import cat from 'images/cat-02.jpg';

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
      {isLoading && (
        <Typography variant="body1" component="h2">
          Wait, please. We are loading contacts.
        </Typography>
      )}

      {error && (
        <Typography variant="body1" component="h2">
          {error}
        </Typography>
      )}

      {!isLoading && visibleContacts.length === 0 && (
        <Typography variant="body1" component="h2">
          Oops... No contacts found.
        </Typography>
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
            width="50%"
            style={{
              borderRadius: '8px',
              boxShadow: 'inset 1px 1px 6px black',
            }}
          />
          <Box height="45vh" sx={{ overflow: 'hidden' }}>
            <List>
              {visibleContacts?.map(contact => {
                return <Contact key={contact.name} contact={contact} />;
              })}
            </List>
          </Box>
        </Box>
      ) : (
        ''
      )}
    </>
  );
};
