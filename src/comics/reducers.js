import { fromJS } from 'immutable';
import {
  FETCH_COMICS_START,
  FETCH_COMICS_SUCCESS,
  FETCH_COMICS_ERROR,
  UPDATE_APP_STATE,
} from './actions';

const merge = (obj1, obj2) => obj1.merge(obj2);

const LOADED = 1;
const LOADING = 2;
const ERROR = 0;
const initialState = fromJS({
  data: {},
  ui: {},
  app: {},
});

const handleAppStateUpdate = (state, { nextAppState }) =>
  state.mergeIn(['app'], nextAppState);

const handleFetchStart = state =>
  merge(state, {
    ui: { status: LOADING },
    data: {},
  });

const handleFetchSuccess = (state, { data }) =>
  merge(state, {
    ui: { status: LOADED },
    data,
  });

const handleFetchError = (state, { error }) =>
  merge(state, {
    ui: { status: ERROR },
    data: {},
    error,
  });

const actionHandlers = {
  [FETCH_COMICS_START]: handleFetchStart,
  [FETCH_COMICS_SUCCESS]: handleFetchSuccess,
  [FETCH_COMICS_ERROR]: handleFetchError,
  [UPDATE_APP_STATE]: handleAppStateUpdate,
};

export default (state = initialState, action) => {
  const { type } = action;
  const handler = actionHandlers[type];
  return handler ? handler(state, action) : state;
};
