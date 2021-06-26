import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-col',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.scss'],
})
export class ColComponent implements OnInit {
  @Input() xl: number;
  @Input() lg: number;
  @Input() md: number;
  @Input() sm: number;
  @Input() xs: number;
  constructor() {}

  ngOnInit(): void {}

  addClass() {
    return {
      xl: this.xl,
      lg: this.lg,
      md: this.md,
      sm: this.sm,
      xs: this.xs,
      col:
        this.xl == undefined &&
        this.lg == undefined &&
        this.md == undefined &&
        this.xs == undefined &&
        this.sm == undefined,
    };
  }
}
