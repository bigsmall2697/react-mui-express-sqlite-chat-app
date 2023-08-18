import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector
} from 'react-redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

import { createBrowserHistory } from 'history';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './root-reducer';

const browserHistory = createBrowserHistory();

const middleware = [...getDefaultMiddleware(), routerMiddleware(browserHistory)];

export const useSelector = useReduxSelector;
export const useDispatch = () => useReduxDispatch();
const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: true,
});

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
