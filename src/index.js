import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { rootReducer } from './reducers/reducer.js'


const store = createStore(rootReducer, compose(applyMiddleware(thunk),
   window.devToolsExtension ? window.devToolsExtension() : f => f
 ))

console.log('Redux store => ',store.getState());

ReactDOM.render(
  <Provider store={ store}>
      <App />
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
