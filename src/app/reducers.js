import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import comicsReducer from '../comics/redux/reducers';

export default combineReducers({
  comics: comicsReducer,
  form: formReducer,
});

