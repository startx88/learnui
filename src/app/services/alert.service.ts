import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { IAlert } from '../models/alert.model';
import { AppState } from '../store';
import { setAlertHide, setAlertShow } from '../store/actions/alert.action';
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
    this.store.dispatch(setAlertShow(alert));
    this.clearTimer = setTimeout(() => {
      this.store.dispatch(setAlertHide());
    }, timer);
  }

  alertHide() {
    this.store.dispatch(setAlertHide());
    if (this.clearTimer) clearTimeout(this.clearTimer);
    this.clearTimer = null;
  }
}
