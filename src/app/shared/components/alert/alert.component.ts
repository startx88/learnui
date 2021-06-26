import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAlert } from 'src/app/models/alert.model';
import { AppState } from 'src/app/store';
import { alertHide } from 'src/app/store/actions/alert.action';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  alert$: Observable<IAlert>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.alert$ = this.store.select('alert');
  }

  hideAlert() {
    this.store.dispatch(alertHide());
  }
}
