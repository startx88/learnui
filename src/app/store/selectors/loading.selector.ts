import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  LoadingState,
  LOADING_REDUCER_NAME,
} from '../reducers/loading.reducer';

// loading state
const loadingState = createFeatureSelector<LoadingState>(LOADING_REDUCER_NAME);

// get loading
export const getLoading = createSelector(
  loadingState,
  (state) => state.loading
);
