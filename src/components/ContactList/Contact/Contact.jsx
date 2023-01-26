import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li style={{ marginBottom: '20px' }}>
      <Typography variant="body2" component="span">
        {contact.name}: {contact.number}{' '}
      </Typography>
      <Button
        variant="contained"
        size="small"
        sx={{
          ml: 2,
          my: 'auto',
          px: 1,
          textTransform: 'none',
          color: 'black',
          bgcolor: 'rgb(239 239 239)',
          boxShadow: 3,
          ':hover': {
            bgcolor: 'white',
            color: 'black',
          },
        }}
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </Button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
