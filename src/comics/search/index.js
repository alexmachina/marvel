/* eslint-disable react/prop-types */
import React from 'react';
import SearchInputComponent from './component';

const Search = ({ value, onChange }) => (
  <SearchInputComponent value={value} onChange={onChange} />
);

export default Search;

