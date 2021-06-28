import { Action, createReducer, on } from '@ngrx/store';
import { setLoadingSpinner } from '../actions/loader.action';

export const LOADING_REDUCER_NAME = 'loading';
export interface LoadingState {
  loading: boolean;
}

const initialState: LoadingState = {
  loading: false,
};

// loading reducer
const _ladingReducer = createReducer(
  initialState,
  on(setLoadingSpinner, (state, { status }) => ({ ...state, loading: status }))
);

// export loading reducer
export function loadingReducer(state: LoadingState, action: Action) {
  return _ladingReducer(state, action);
}
