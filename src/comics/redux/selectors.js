import { createStructuredSelector } from 'reselect';
import { Map } from 'immutable';
import { getListFromMapById } from './utils';

const comicsDataSelector = state => state.getIn(['comics', 'data'], Map()).update('results', getListFromMapById);
const searchValueSelector = state => state.getIn(['comics', 'app', 'searchValue']);

export default createStructuredSelector({
  comics: comicsDataSelector,
  searchValue: searchValueSelector,
});

