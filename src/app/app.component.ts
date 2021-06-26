import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAlert } from './models/alert.model';
import { AppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: { class: 'root' },
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'learnui';
  loading = false;
  alert$: Observable<IAlert>;
  protected = ['admin', 'auth', 'not-found'];
  enable: boolean = false;
  constructor(private store: Store<AppState>, private router: Router) {}

  ngAfterViewInit() {
    const body = document.querySelector('body');
    body.classList.add('default');
  }

  ngOnInit() {
    this.alert$ = this.store.select('alert');

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      }
      if (event instanceof NavigationEnd || event instanceof NavigationError) {
        this.loading = false;
      }

      if (event instanceof NavigationStart || event instanceof NavigationEnd) {
        const e = event.url.split('/').filter((x) => x)[0];
        if (
          this.protected.includes(e) ||
          (e && e.toString().includes('auth?returnUrl='))
        ) {
          this.enable = false;
        } else {
          this.enable = true;
        }
      }
    });
  }
}
