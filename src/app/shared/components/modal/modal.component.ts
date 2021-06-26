import { ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Size } from 'src/app/utility';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() id: string;
  @Input() title: string;
  @Input() size: Size = Size.sm;
  @Output() close = new EventEmitter();
  @ViewChild('closeBtn') closeBtn: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.close.emit();
  }

  // hide
  hide() {
    this.closeBtn.nativeElement.click();
  }
}
