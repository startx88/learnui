import { Action, createReducer, on } from '@ngrx/store';
import { ICategory } from 'src/app/models/category.model';
import { fetchAllCategory, startLoading } from '../actions/category.action';

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
  on(
    fetchAllCategory,
    (state, { payload }) => (
      console.log('p', payload),
      {
        ...state,
        loading: false,
        categories: payload,
      }
    )
  )
);

// export reducer
export function categoryReducer(state: CategoryState, action: Action) {
  return _categoryReducer(state, action);
}
