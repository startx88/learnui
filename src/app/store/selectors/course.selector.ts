import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseState, COURSE_REDUCER_NAME } from '../reducers/course.reducer';

// state
const courseState = createFeatureSelector<CourseState>(COURSE_REDUCER_NAME);

// select all courses
export const courseLoading = createSelector(
  courseState,
  (state) => state.loading
);

export const getAllCourses = createSelector(
  courseState,
  (state) => state.courses
);

export const getCourseDetail = createSelector(
  courseState,
  (state) => state.course
);
