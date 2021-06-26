import { Component, Input, OnInit } from '@angular/core';
import { Color } from 'src/app/utility';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() color: Color = Color.white;
  constructor() {}

  ngOnInit(): void {}
}
