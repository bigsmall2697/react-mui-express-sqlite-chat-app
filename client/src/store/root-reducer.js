import { routerReducer } from 'react-router-redux';
import testSlice from './tests';

export default {
  tests: testSlice.reducer,
  routing: routerReducer,
};
