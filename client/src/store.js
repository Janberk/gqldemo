import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


const initialState = {};
const middleWare = [thunk, createLogger()];
const reduxDevtoolsExt = (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose;

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleWare), reduxDevtoolsExt)
);

export default store;
