import { createAction, props } from '@ngrx/store';

// modal contants
export const SET_MODAL_STATUS = '[modal] open and close modal';

// action
export const setModalStatus = createAction(
  SET_MODAL_STATUS,
  props<{ visible: boolean }>()
);
