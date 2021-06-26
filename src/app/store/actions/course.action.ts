import { createAction, props } from '@ngrx/store';
import { ICourse } from 'src/app/models/course.model';

// constants
export const COURSE_LOADING = '[COURSE] loading start';
export const LOAD_COURSES = '[COURSE] load all course';
export const LOAD_COURSE_DETAIL = '[COURSE] load course detail';

// actions
export const startLoadingCourse = createAction(COURSE_LOADING);
export const loadCourse = createAction(
  LOAD_COURSES,
  props<{ payload: ICourse[] }>()
);
