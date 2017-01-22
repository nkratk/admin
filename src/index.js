import 'babel-polyfill'; //babel cant transpile all the es6 features, so we need polyfills to do. Instead of loading all bunch in future we can load only what are required
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
