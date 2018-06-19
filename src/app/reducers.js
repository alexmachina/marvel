import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import comicsReducer from '../comics/redux/reducers';

const reducers = combineReducers({
  app: comicsReducer,
  form: formReducer,
});


export default reducers;
