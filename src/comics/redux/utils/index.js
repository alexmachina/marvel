import { Map, List } from 'immutable';
// import { LOADING, LOADED, ERROR } from '../constants/statusTypes';

export const setMapById = results =>
  results.reduce((acc, curr) =>
    acc.set(curr.get('id'), curr), Map());

export const getListFromMapById = map =>
  (map ? map.toList() : List());

const normalizeData = data =>
  data.update('results', setMapById);

export const handleFetchStart = (state, { data }, path) =>
  state.setIn(path, Map());

export const handleFetchSuccess = (state, { data }, path) =>
  state.setIn(path, normalizeData(data));

export const handleFetchError = (state, { error }, path) =>
  state.mergeIn(path, error);
