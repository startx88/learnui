import { Action, createReducer, on } from '@ngrx/store';
import { ICourse } from 'src/app/models/course.model';
import {
  startLoadingCourse,
  loadCourse,
  getCourseDetail,
} from '../actions/course.action';

export const COURSE_REDUCER_NAME = 'course';
// cours state
export interface CourseState {
  loading: boolean;
  courses: ICourse[];
  course: ICourse;
}

// initial state
const initialState: CourseState = {
  loading: false,
  courses: [],
  course: null,
};

// create course reducer
const _courseReducer = createReducer(
  initialState,
  on(startLoadingCourse, (state) => ({ ...state, loading: true })),
  on(loadCourse, (state, { payload }) => ({
    ...state,
    loading: false,
    courses: payload,
  })),
  on(
    getCourseDetail,
    (state, { payload }) => (
      console.log(payload), { ...state, course: payload }
    )
  )
);

// export reducer
export function courseReducer(state: CourseState, action: Action) {
  return _courseReducer(state, action);
}
