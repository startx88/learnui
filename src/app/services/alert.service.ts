import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { IAlert } from '../models/alert.model';
import { AppState } from '../store';
import { alertHide, alertShow } from '../store/actions/alert.action';
import { Color } from '../utility';
import { Size } from '../utility';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  clearTimer = null;
  constructor(private store: Store<AppState>) {}

  // alert visible
  alertShow(alert: IAlert, timer: number = 3000) {
    this.store.dispatch(alertShow(alert));
    this.clearTimer = setTimeout(() => {
      this.store.dispatch(alertHide());
    }, timer);
  }

  alertHide() {
    this.store.dispatch(alertHide());
    if (this.clearTimer) clearTimeout(this.clearTimer);
    this.clearTimer = null;
  }
}
