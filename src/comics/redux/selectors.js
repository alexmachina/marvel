import { createStructuredSelector } from 'reselect';
import { Map } from 'immutable';

const comicsDataSelector = state => state.getIn(['app', 'comics', 'data'], Map());
const didFirstLoadSelector = state => state.getIn(['app', 'comics', 'ui', 'didFirstLoad'], false);

export default createStructuredSelector({
  comics: comicsDataSelector,
  didFirstLoad: didFirstLoadSelector,
});

