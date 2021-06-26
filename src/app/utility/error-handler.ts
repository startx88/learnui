import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { AlertService } from '../services/alert.service';
import { Color } from './enums';

export function errorHandler(error: HttpErrorResponse, alert) {
  const errorMessage = 'Something went wrong';
  if (!error.error || !error.error.errors) {
    return throwError(errorMessage);
  }

  alert.alertShow({
    message: error.error.errors[0].message,
    color: Color.danger,
  });

  return throwError(error.error.errors);
}
