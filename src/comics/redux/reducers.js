import { fromJS, Map } from 'immutable';
import {
  FETCH_COMICS_START,
  FETCH_COMICS_SUCCESS,
  FETCH_COMICS_ERROR,
  UPDATE_APP_STATE,
  FETCH_COMIC_CHARACTERS_START,
  FETCH_COMIC_CHARACTERS_SUCCESS,
  FETCH_COMIC_CHARACTERS_ERROR,
} from './actions';
import { handleFetchStart, handleFetchSuccess, handleFetchError } from './utils';

const initialState = fromJS({
  data: {},
  ui: {},
  app: {},
});

const handleAppStateUpdate = (state, { nextAppState }) =>
  state.mergeIn(['app'], nextAppState);

const actionHandlers = {
  [FETCH_COMICS_START]: state => handleFetchStart(state, Map(), ['data']),
  [FETCH_COMICS_SUCCESS]: (state, { data }) => handleFetchSuccess(state, { data }, ['data']),
  [FETCH_COMICS_ERROR]: (state, { error }) => handleFetchError(state, error, ['data', 'error']),
  [FETCH_COMIC_CHARACTERS_START]: (state, { comicId }) => handleFetchStart(state, { data: Map() }, ['data', 'results', comicId, 'characters']),
  [FETCH_COMIC_CHARACTERS_SUCCESS]: (state, { data, comicId }) => handleFetchSuccess(state, { data }, ['data', 'results', comicId, 'characters']),
  [FETCH_COMIC_CHARACTERS_ERROR]: (state, { error, comicId }) => handleFetchSuccess(state, error, ['data', 'results', comicId, 'characters']),
  [UPDATE_APP_STATE]: handleAppStateUpdate,
};

export default (state = initialState, action) => {
  const { type } = action;
  const handler = actionHandlers[type];
  return handler ? handler(state, action) : state;
};
