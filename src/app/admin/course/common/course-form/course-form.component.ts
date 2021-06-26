import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/models/category.model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  form: FormGroup;
  selectedImage: string;
  cats$: Observable<ICategory[]>;
  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      category: ['', [Validators.required]],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: [''],
    });
  }

  addCourse() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
  }

  // upload
  onUpload(files: File[]) {
    console.log(files);
  }

  // validation methods
  get category(): FormControl {
    return this.form.get('category') as FormControl;
  }

  get title(): FormControl {
    return this.form.get('title') as FormControl;
  }

  get description(): FormControl {
    return this.form.get('description') as FormControl;
  }

  validClass(control: FormControl): object {
    return {
      'is-valid': control.valid && control.touched,
      'is-invalid': control.invalid && control.touched,
    };
  }
}
