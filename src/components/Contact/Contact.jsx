import PropTypes from 'prop-types';
import { Button } from 'styles/Button.styled';

export const Contact = ({ name, number, onDelete }) => {
  return (
    <li>
      {name}: {number}
      <Button type="button" onClick={onDelete}>
        Delete
      </Button>
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
