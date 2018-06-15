import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './index.scss';

const App = () => <h1 styleName="test">Hey hey</h1>;
const StyledApp = CSSModules(styles)(App);
const rootElement = document.getElementById('root');

ReactDOM.render(<StyledApp />, rootElement);
