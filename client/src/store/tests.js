import { getTests } from 'data/api';
import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  tests: [],
  isLoading: false,
  count: 0,
};

const testSlice = createSlice({
  name: 'tests',
  initialState,
  reducers: {
    startLoading: state => {
      state.isLoading = true;
    },
    fetchTestsSuccess: (state, { payload }) => {
      const { tests, count } = payload;
      state.tests = tests;
      state.count = count;
      state.isLoading = false;
    },
    fetchTestsFailure: state => {
      state.tests = [];
      state.count = 0;
      state.isLoading = false;
    },
  },
});

// Actions
export const {
  startLoading,
  fetchTestsSuccess,
  fetchTestsFailure,
} = testSlice.actions;

// Thunks
export const fetchTestCases = () => async dispatch => {
  try {
    dispatch(startLoading());
    const { rows, count } = await getTests();
    dispatch(fetchTestsSuccess({
      tests: rows,
      count,
    }));
  } catch (error) {
    dispatch(fetchTestsFailure());
  }
};

// Selectors
export const getTestList = () => createSelector(
  state => state.tests,
  state => state.tests
);

export const getTestsCount = () => createSelector(
  state => state.tests,
  state => state.count
);

export const getLoading = () => createSelector(
  state => state.tests,
  tests => tests.isLoading,
);

export default testSlice;
