import { fromJS } from 'immutable';
import dumb from './dumb';

export const fetchComics = () => fromJS(dumb.data);

