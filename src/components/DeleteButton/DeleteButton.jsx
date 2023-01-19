import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Btn } from './DeleteButton.styled';

export const DeleteButton = ({ text, type, id }) => {
  const dispatch = useDispatch();

  return (
    <Btn type={type} onClick={() => dispatch(deleteContact(id))}>
      {text}
    </Btn>
  );
};

DeleteButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
