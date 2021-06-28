import { createAction, props } from '@ngrx/store';

// constants
export const SET_LOADING_ACTION = '[LOADING] set loading spinner';

// action
export const setLoadingSpinner = createAction(
  SET_LOADING_ACTION,
  props<{ status: boolean }>()
);
