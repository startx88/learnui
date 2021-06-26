import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { throwError } from 'rxjs';
import { AppState } from '../store';
import { alertShow } from '../store/actions/alert.action';
import { Color } from './enums';

export function errorHandler(error: HttpErrorResponse, store: Store<AppState>) {
  const errorMessage = 'Something went wrong';
  if (!error.error || !error.error.errors) {
    return throwError(errorMessage);
  }

  store.dispatch(
    alertShow({
      payload: {
        message: error.error.errors[0].message,
        color: Color.danger,
      },
    })
  );

  return throwError(error.error.errors);
}
