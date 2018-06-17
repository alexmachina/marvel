import { createStructuredSelector } from 'reselect';

const comicsDataSelector = state => state.getIn(['comics', 'data']);
const searchValueSelector = state => state.getIn(['comics', 'app', 'searchValue']);

export default createStructuredSelector({
  comics: comicsDataSelector,
  searchValue: searchValueSelector,
});

