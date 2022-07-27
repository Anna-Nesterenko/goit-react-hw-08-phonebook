import PropTypes from 'prop-types';
import { Field } from './Filter.styled';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <label>
      Search contacts:
      <Field
        type="text"
        value={value}
        onChange={onChangeFilter}
        placeholder="enter contact"
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
