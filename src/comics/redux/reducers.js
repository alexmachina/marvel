import { fromJS, Map, List } from 'immutable';
import {
  FETCH_COMICS_START,
  FETCH_COMICS_SUCCESS,
  FETCH_COMICS_ERROR,
  FETCH_MORE_COMICS_START,
  FETCH_MORE_COMICS_SUCCESS,
  FETCH_COMIC_CHARACTERS_START,
  FETCH_COMIC_CHARACTERS_SUCCESS,
  FETCH_COMIC_CHARACTERS_ERROR,
} from './actions';
import { handleFetchStart, handleFetchSuccess, handleFetchError, setMapById } from './utils';
import { LOADED, LOADING, ERROR } from './constants/statusTypes';

const initialState = fromJS({
  comics: {
    data: {},
    ui: {},
  },
  characters: {
    data: {},
    ui: {},
  },
});

const handleComicsFetchStart = (state, { data = Map() }) =>
  state.mergeIn(['comics'], {
    data,
    ui: { status: LOADING, didLoadFirst: false },
  });

const handleComicsFetchSuccess = (state, { data = Map() }) =>
  state.mergeIn(['comics'], {
    data: data.set('results', setMapById(data.get('results'))),
    ui: { status: LOADED, didFirstLoad: true },
  });

const handleCharactersFetchStart = (state, { data = Map(), comicId }) =>
  state.mergeIn(['characters', comicId], {
    data,
    ui: { status: LOADING },
  });

const handleCharactersFetchSuccess = (state, { data = Map(), comicId }) =>
  state.mergeIn(['characters', comicId], {
    data: data.set('results', setMapById(data.get('results'))),
    ui: { status: LOADED },
  });

const handleComicsFetchStartMore = state =>
  state.setIn(['comics', 'ui', 'status'], LOADING);

const handleComicsFetchSuccessMore = (state, { data = Map() }) => {
  const newData = data.update('results', setMapById)
    .update('results', results =>
      results.merge(state.getIn(['comics', 'data', 'results'])));

  return state.mergeIn(['comics'], {
    data: newData,
    ui: { status: LOADED, didLoadFirst: true },
  });
};

const actionHandlers = {
  [FETCH_COMICS_START]: handleComicsFetchStart,
  [FETCH_COMICS_SUCCESS]: handleComicsFetchSuccess,
  [FETCH_COMICS_ERROR]: (state, { error }) => handleFetchError(state, error, ['data', 'error']),
  [FETCH_MORE_COMICS_START]: handleComicsFetchStartMore,
  [FETCH_MORE_COMICS_SUCCESS]: handleComicsFetchSuccessMore,
  [FETCH_COMIC_CHARACTERS_START]: handleCharactersFetchStart,
  [FETCH_COMIC_CHARACTERS_SUCCESS]: handleCharactersFetchSuccess,
  [FETCH_COMIC_CHARACTERS_ERROR]: (state, { error, comicId }) => handleFetchSuccess(state, error, ['data', 'results', comicId, 'characters']),
};

export default (state = initialState, action) => {
  const { type } = action;
  const handler = actionHandlers[type];
  return handler ? handler(state, action) : state;
};
