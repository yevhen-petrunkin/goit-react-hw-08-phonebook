import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import Box from '@mui/material/Box';

export const Contact = ({ contact }) => {
  const { name, number, id } = contact;
  const dispatch = useDispatch();

  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <a
        href={`tel:${number}`}
        style={{ padding: '10px 0', textDecoration: 'none' }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            color: 'black',
            ':hover': {
              color: '#1565c0',
              textDecoration: 'underline',
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
          <Typography variant="body1" component="span">
            {name}: {number}{' '}
          </Typography>
        </Box>
      </a>
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
            bgcolor: 'white',
            color: 'black',
          },
        }}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
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
