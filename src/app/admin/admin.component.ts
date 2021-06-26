import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `<app-sidebar></app-sidebar>
    <div class="wrap-container">
      <app-header url="admin"> </app-header>
      <div class="wrap-content">
        <router-outlet></router-outlet>
      </div>
      <app-footer type="admin"></app-footer>
    </div>`,
  styles: [],
  host: { class: 'wrap flex' },
})
export class AdminComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
