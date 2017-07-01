import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'; // glue between React and the DOM
import App from './Containers/App';
import './index.css';
import 'tachyons';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchReducer, robotsReducer } from './reducers';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';


const logger = createLogger();
const rootsReducer = combineReducers({
  search: searchReducer,
  robots: robotsReducer
});
const store = createStore(rootsReducer, applyMiddleware(ReduxThunk, logger)); 

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

App.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  robots: PropTypes.array.isRequired,
  isPending: PropTypes.bool.isRequired,
  error: PropTypes.any.isRequired
}