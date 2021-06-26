import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  @Input() url: string = '/';
  @Input() size: number = 35;
  @Input() color: string = 'white';
  @Input() bg: string = '#fc8019';
  @Input() name: string = 'Learn Ui';
  constructor() {}

  ngOnInit(): void {}
}
