import { createReducer, on, Action } from '@ngrx/store';
import { IAlert } from 'src/app/models/alert.model';
import { Color, Direction, Size } from 'src/app/utility';
import { alertHide, alertShow } from '../actions/alert.action';

export const ALERT_REDUCER_NAME = 'alert';

// initial state
const initialState: IAlert = {
  visible: false,
  color: Color.success,
  message: '',
  size: Size.sm,
  direction: Direction.topRight,
};

// create reducer
const _alertReducer = createReducer(
  initialState,
  on(alertShow, (state, { payload }) => ({
    ...state,
    visible: true,
    message: payload.message,
    direction: payload.direction ?? state.direction,
    color: payload.color ?? state.color,
    size: payload.size ?? state.size,
  })),
  on(alertHide, (state) => ({
    ...state,
    visible: false,
    message: '',
    color: Color.success,
    size: Size.sm,
    direction: Direction.topRight,
  }))
);

// export reducer
export function alertReducer(state: IAlert, action: Action) {
  return _alertReducer(state, action);
}
