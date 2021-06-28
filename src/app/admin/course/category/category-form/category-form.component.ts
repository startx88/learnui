import {
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TextareaComponent } from 'src/app/shared/components/textarea/textarea.component';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit, OnDestroy {
  @Input() form: FormGroup;
  @Output() sumbmit = new EventEmitter();
  @ViewChild(TextareaComponent) editor: TextareaComponent;

  constructor() {}

  ngOnInit(): void {}

  addCategory() {
    this.sumbmit.emit();
  }

  // validation
  get title(): FormControl {
    return this.form.get('title') as FormControl;
  }

  get description(): FormControl {
    return this.form.get('title') as FormControl;
  }

  validClass(control: FormControl): object {
    return {
      'is-valid': control.valid && control.touched,
      'is-invalid': control.invalid && control.touched,
    };
  }

  ngOnDestroy() {
    //  this.form.reset();
  }
}
