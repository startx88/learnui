import { OnDestroy, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TextareaComponent } from 'src/app/shared/components/textarea/textarea.component';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  @ViewChild(TextareaComponent) editor: TextareaComponent;
  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      title: ['', [Validators.required]],
      description: [''],
    });
  }

  addCategory() {
    this.form.get('title').markAsTouched();
    if (this.form.invalid) return;
    console.log(this.form.value);
  }

  resetForm() {
    this.form.reset();
    this.editor.ckEditor.editorInstance.setData('');
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
