import { createSelector } from '@ngrx/store';
import { AppState } from '..';

// state
const courseState = (state: AppState) => state.course;

// select all courses
export const getAllCourses = createSelector(
  courseState,
  (state) => state.courses
);
