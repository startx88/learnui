import { ActionReducerMap, combineReducers } from '@ngrx/store';
import { IAlert } from '../models/alert.model';
import { alertReducer, ALERT_REDUCER_NAME } from './reducers/alert.reducer';
import {
  courseReducer,
  CourseState,
  COURSE_REDUCER_NAME,
} from './reducers/course.reducer';

// application state
export interface AppState {
  [ALERT_REDUCER_NAME]: IAlert;
  [COURSE_REDUCER_NAME]: CourseState;
}

// export root reducer
export const rootReducer: ActionReducerMap<AppState> = {
  [ALERT_REDUCER_NAME]: alertReducer,
  [COURSE_REDUCER_NAME]: courseReducer,
};
