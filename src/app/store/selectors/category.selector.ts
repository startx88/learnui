import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CategoryState,
  CATEGORY_REDUCER_NAME,
} from '../reducers/category.reducer';

// category state
const catState = createFeatureSelector<CategoryState>(CATEGORY_REDUCER_NAME);

// get all category
export const getAllCategory = createSelector(
  catState,
  (state) => state.categories
);
