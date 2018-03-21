import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import logger from 'redux-logger';

const middleware = applyMiddleware(logger, thunk)
const store = createStore(rootReducer , middleware);


ReactDOM.render(
    <div className="App">
    <Provider store={store}>
      <App />
    </Provider>
    </div>,
    document.getElementById('root')
  );
