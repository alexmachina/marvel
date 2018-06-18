import { fromJS } from 'immutable';
import api from '../';
import dumb from './dumb.json';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const fetchComics = async (queryParams) => {
  const { data: { data } } = await api.get('/comics', {
    params: queryParams,
  });
  /* await sleep(1);
  console.log('data', dumb.data);
  */

  return fromJS(data);
};

export const fetchComicCharacters = async ({ comicId, queryParams = {} }) => {
  const url = `/comics/${comicId}/characters`;
  const { data: { data } } = await api.get(url, { params: queryParams });

  return fromJS(data);
};

