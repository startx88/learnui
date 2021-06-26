import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent implements OnInit {
  @Input() label: string;
  @Input() required: boolean = false;
  @Input() validation: string;
  constructor() {}

  ngOnInit(): void {}
}
