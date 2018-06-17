import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Comics from '../comics';
import rootReducer from './reducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk)),
);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <CssBaseline />
        <Grid container direction="column">
          <Route path="/" component={Comics} />
        </Grid>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
