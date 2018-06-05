import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
// import { createLogger } from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import './index.css';
import App from './components/App'
import battlegroundApp from './reducers'
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
// const loggerMiddleware = createLogger()

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    ...battlegroundApp,
    router: routerReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    myRouterMiddleware,
    // loggerMiddleware // neat middleware that logs actions
  )
)


ReactDOM.render(
 <Provider store={store}>
   <App/>
 </Provider>,
   document.getElementById('root'));

registerServiceWorker();
