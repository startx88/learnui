import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/utility';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  color: Color = Color.white;
  constructor() {}

  ngOnInit(): void {}
}
