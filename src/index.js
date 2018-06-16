import React from 'react';
import api from 'Api';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import 'typeface-roboto';
// import CssBaseline from '@material-ui/core/CssBaseline';
import styles from './index.scss';

// import comics from './api/comics/dumb';

const App = () => <h1 styleName="test">{api}</h1>;
const StyledApp = CSSModules(styles)(App);
const rootElement = document.getElementById('root');

ReactDOM.render(<StyledApp />, rootElement);
