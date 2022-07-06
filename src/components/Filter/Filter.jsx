import PropTypes from 'prop-types';

export const Filter = ({ filter, onChange }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input type="text" value={filter} onChange={onChange} />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
