import { createAction, props } from '@ngrx/store';
import { ICategory } from 'src/app/models/category.model';

// constants

export const LOADING_START = '[CATEGORY] start loading';
export const CATEGORY_FETCH_ALL = '[CATEGORY] get all category';
export const CATEGORY_DELETE = '[CATEGORY] delete category';
export const CATEGORY_UPDATE = '[CATEGORY] update category';

export const CATEGORY_ADD_START = '[CATEGORY] add start';
export const CATEGORY_ADD_SUCCESS = '[CATEGORY] add success';

// action
export const startLoading = createAction(LOADING_START);
export const fetchAllCategory = createAction(
  CATEGORY_FETCH_ALL,
  props<{ payload: ICategory[] }>()
);

export const addCategoryStart = createAction(
  CATEGORY_ADD_START,
  props<{ title: string; description: string }>()
);
export const categoryAddSuccess = createAction(
  CATEGORY_ADD_SUCCESS,
  props<{ payload: ICategory }>()
);
