import PropTypes from 'prop-types';
import { SubTitle } from 'components/Titles.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <>
      <SubTitle>Find contacts by name</SubTitle>
      <input type="text" value={filter} onChange={onChange} />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
