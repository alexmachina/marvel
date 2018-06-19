import { createStructuredSelector } from 'reselect';
import { Map } from 'immutable';

const charactersSelector = (state, props) =>
  state.getIn(['app', 'characters', props.details.get('id'), 'data'], Map());

const charactersLoaded = (state, props) =>
  state.getIn(['app', 'characters', props.details.get('id'), 'ui', 'status'], undefined);

export default createStructuredSelector({
  characters: charactersSelector,
  charactersLoadStatus: charactersLoaded,
});
