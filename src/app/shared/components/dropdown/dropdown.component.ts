import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() label: string;
  @Input() direction: string = 'right';

  constructor() {}

  ngOnInit(): void {}

  onHandler(event: Event): void {}
}
