import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ value, placeholder, onChange }) => (
  <input
    type="text"
    value={value}
    placeholder={placeholder}
    onChange={e => onChange(e.target.value)}
  />
);

SearchInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

SearchInput.defaultProps = {
  value: '',
  placeholder: '',
  onChange: a => a,
};

export default SearchInput;
