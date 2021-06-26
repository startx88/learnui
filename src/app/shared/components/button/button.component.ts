import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Color, Size } from 'src/app/utility';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() color: Color = Color.primary;
  @Input() size: Size = Size.xs;
  @Input() disable: boolean = false;
  @ViewChild('btn') button: ElementRef;

  constructor() {}
  ngOnInit(): void {}
}
