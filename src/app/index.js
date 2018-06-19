import React from 'react';
import { hot } from 'react-hot-loader';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Comics from '../comics';
import rootReducer from './reducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(applyMiddleware(reduxThunk)),
);

const App = () => (
  <Provider store={store}>
    <Grid container>
      <CssBaseline />
      <Grid item xs={12}>
        <Comics />
      </Grid>
    </Grid>
  </Provider>
);

export default hot(module)(App);
