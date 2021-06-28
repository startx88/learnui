import { createAction, props } from '@ngrx/store';
import { ICategory } from 'src/app/models/category.model';

// constants

export const LOADING_START = '[CATEGORY] start loading';
export const CATEGORY_FETCH_ALL = '[CATEGORY] get all category';

export const CATEGORY_ADD_START = '[CATEGORY] add start';
export const CATEGORY_ADD_SUCCESS = '[CATEGORY] add success';

export const DELETE_CATEGORY_START = '[CATEGORY] delete start';
export const DELETE_CATEGORY_SUCCESS = '[CATEGORY] delete success';

export const UPDATE_CATEGORY_START = '[CATEGORY] update category start';
export const UPDATE_CATEGORY_SUCCESS = '[CATEGORY] update category';

// action
export const startLoading = createAction(LOADING_START);
export const fetchAllCategory = createAction(
  CATEGORY_FETCH_ALL,
  props<{ payload: ICategory[] }>()
);

export const categoryAddStart = createAction(
  CATEGORY_ADD_START,
  props<{ title: string; description: string; offer: number }>()
);
export const categoryAddSuccess = createAction(
  CATEGORY_ADD_SUCCESS,
  props<{ payload: ICategory }>()
);

// delete action
export const categoryDeleteStart = createAction(
  DELETE_CATEGORY_START,
  props<{ id: string }>()
);
export const categoryDeleteSuccess = createAction(
  DELETE_CATEGORY_SUCCESS,
  props<{ id: string }>()
);
