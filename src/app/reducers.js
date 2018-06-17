import { combineReducers } from 'redux-immutable';
import comicsReducer from '../comics/reducers';

export default combineReducers({
  comics: comicsReducer,
});

