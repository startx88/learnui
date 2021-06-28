import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ModalState, MODAL_REDUCER_NAME } from '../reducers/moda.reducer';

// state
const modalState = createFeatureSelector<ModalState>(MODAL_REDUCER_NAME);

// get modal state
export const getModalStatus = createSelector(
  modalState,
  (state) => state.visible
);
