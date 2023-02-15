import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ContactItem, ContactLink } from './Contact.styled';
import { useMedia } from 'hooks/useMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import Box from '@mui/material/Box';

export const Contact = ({ contact }) => {
  const { name, number, id } = contact;
  const dispatch = useDispatch();

  const { isMedium } = useMedia();

  let typographyVar = 'body2';

  if (isMedium) {
    typographyVar = 'body1';
  }

  return (
    <ContactItem>
      <ContactLink href={`tel:${number}`}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            color: 'black',
            ':hover': {
              textDecoration: 'underline',
              color: '#1565c0',
            },
          }}
        >
          <AddIcCallIcon
            sx={{
              ':hover': {
                color: 'white',
                bgcolor: '#1565c0',
              },
            }}
          />
          <Typography variant={typographyVar} component="span">
            {name}: {number}{' '}
          </Typography>
        </Box>
      </ContactLink>
      <Button
        variant="contained"
        size="small"
        sx={{
          px: 1,
          textTransform: 'none',
          color: 'black',
          bgcolor: 'rgb(239 239 239)',
          boxShadow: 3,
          ':hover': {
            color: 'black',
            bgcolor: 'white',
          },
        }}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </Button>
    </ContactItem>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
