import PropTypes from 'prop-types';

import { DeleteButton } from '../../DeleteButton';

export const Contact = ({ contact }) => (
  <li style={{ marginBottom: '20px' }}>
    {contact.name}: {contact.phone}{' '}
    <DeleteButton type="button" text="Delete" id={contact.id} />
  </li>
);

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
