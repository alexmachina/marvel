import { fromJS } from 'immutable';
import api from '../';
import dumb from './dumb.json';
import dumbChars from './dumbChar.json';

const chars = fromJS(dumbChars.data);
const comics = fromJS(dumb.data);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const fetchComics = async (queryParams) => {
  const { data: { data } } = await api.get('/comics', {
    params: queryParams,
  });
  return fromJS(data);
};

export const fetchComicCharacters = async ({ comicId, queryParams = {} }) => {
  const url = `/comics/${comicId}/characters`;
  const { data: { data } } = await api.get(url, { params: queryParams });

  return fromJS(data);
};

