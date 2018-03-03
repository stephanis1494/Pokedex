import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pokedex from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Pokedex />, document.getElementById('root'));
registerServiceWorker();
