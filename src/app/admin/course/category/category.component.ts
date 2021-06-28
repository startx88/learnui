import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { AppState } from 'src/app/store';
import { setLoadingSpinner } from 'src/app/store/actions';
import {
  categoryAddStart,
  categoryDeleteStart,
  startLoading,
} from 'src/app/store/actions/category.action';
import { getAllCategory } from 'src/app/store/selectors/category.selector';
import { Status } from 'src/app/utility';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  form: FormGroup;
  @ViewChild(ModalComponent) modal: ModalComponent;
  cats$: Observable<ICategory[]> = this.store.select(getAllCategory);
  categories: ICategory[];
  constructor(private store: Store<AppState>, private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.store.dispatch(startLoading());

    this.store.select(getAllCategory).subscribe((d) => (this.categories = d));
    // form
    this.form = this._fb.group({
      title: ['', [Validators.required]],
      description: [''],
      offer: [0],
    });
  }

  // reset form
  onCloseModal() {
    this.form.reset();
  }

  // add / update category
  addCategory() {
    this.form.get('title').markAsTouched();
    if (this.form.invalid) return;
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(categoryAddStart(this.form.value));
    this.modal.hide();
  }

  // PERFORM CRUD OPERATION
  onHandler(event) {
    const { status, data } = event;
    switch (status) {
      case Status.EDIT:
        break;
      case Status.ACTIVE:
        break;
      case Status.INACTIVE:
        break;
      case Status.DELETED:
        this.store.dispatch(categoryDeleteStart({ id: data.id }));
        break;
    }
  }
}
