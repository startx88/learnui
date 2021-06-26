import { createAction, props } from '@ngrx/store';
import { IAlert } from 'src/app/models/alert.model';

// constants
export const ALERT_SHOW = '[ALERT] show alert';
export const ALERT_HIDE = '[ALERT] hide alert';

// actions
const alertShow = createAction(ALERT_SHOW, props<{ payload: IAlert }>());
const alertHide = createAction(ALERT_HIDE);

// export
export { alertShow, alertHide };
