import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
// import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import './index.css';
import App from './components/App'
import battlegroundApp from './reducers'
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
// const loggerMiddleware = createLogger()

const store = createStore(
  battlegroundApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    // loggerMiddleware // neat middleware that logs actions
  )
)


ReactDOM.render(
 <Provider store={store}>
   <App/>
 </Provider>,
   document.getElementById('root'));

registerServiceWorker();
