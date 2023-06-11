import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

function Filter({ value: { filter }, onChange }) {
  return (
    <Label>
      Find contacts by name
      <input type="text" name="filter" value={filter} onChange={onChange} />
    </Label>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.shape({
    contacts: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.string.isRequired).isRequired
    ).isRequired,
    filter: PropTypes.string.isRequired,
  }).isRequired,
};

export default Filter;
