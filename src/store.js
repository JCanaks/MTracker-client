import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers';
import errorMiddleware from './middleware/errorMiddleware';
import authMiddleware from './middleware/authMiddleware';

const promiseTypeSuffixes = ['LOADING', 'SUCCESS', 'FAILURE'];
const middleware = [
  thunk, errorMiddleware, authMiddleware,
  promiseMiddleware({ promiseTypeSuffixes }),
];

if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger({ collapsed: true }));
}
const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
