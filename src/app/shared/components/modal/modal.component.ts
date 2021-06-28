import { ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { getModalStatus } from 'src/app/store/selectors/modal.selector';
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

  modal$: Observable<boolean>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.modal$ = this.store.select(getModalStatus);
  }

  onClose() {
    this.close.emit();
  }

  // hide
  hide() {
    this.closeBtn.nativeElement.click();
  }
}
