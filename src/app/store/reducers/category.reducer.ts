import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { ICategory } from 'src/app/models/category.model';
import {
  categoryAddSuccess,
  categoryDeleteSuccess,
  fetchAllCategory,
  startLoading,
} from '../actions/category.action';

export const CATEGORY_REDUCER_NAME = 'category';
// cat state
export interface CategoryState {
  loading: boolean;
  categories: ICategory[];
}
// category state
const initialState = {
  loading: false,
  categories: [],
};

// create reducer
const _categoryReducer = createReducer(
  initialState,
  on(startLoading, (state) => ({ ...state, loading: true })),
  on(fetchAllCategory, (state, { payload }) => ({
    ...state,
    loading: false,
    categories: payload,
  })),
  on(categoryAddSuccess, (state, { payload }) => ({
    ...state,
    categories: [...state.categories, payload],
  })),
  on(categoryDeleteSuccess, (state, { id }) => ({
    ...state,
    categories: state.categories.filter((item) => item.id !== id),
  }))
);

// export reducer
export function categoryReducer(state: CategoryState, action: Action) {
  return _categoryReducer(state, action);
}
