import PropTypes from 'prop-types';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <label htmlFor="">
      Search
      <input
        type="text"
        value={value}
        onChange={onChangeFilter}
        placeholder="search contact"
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
