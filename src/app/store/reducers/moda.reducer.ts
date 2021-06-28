import { createReducer, on, Action } from '@ngrx/store';
import { setModalStatus } from '../actions/modal.action';

// modal state
export const MODAL_REDUCER_NAME = 'modal';
export interface ModalState {
  visible: boolean;
}

// initial state
const initialState = {
  visible: false,
};

// create reducer
const _modalReducer = createReducer(
  initialState,
  on(setModalStatus, (state, { visible }) => ({ ...state, visible }))
);

// export modal reducer
export function modalReducer(state: ModalState, action: Action) {
  return _modalReducer(state, action);
}
