import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import 'babel-polyfill';
import App from './app';

// import comics from './api/comics/dumb';

const el = document.getElementById('root');

ReactDOM.render(<App />, el);
