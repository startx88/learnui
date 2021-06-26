import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { AppState } from 'src/app/store';
import { getAllCategory } from 'src/app/store/selectors/category.selector';
import { CategoryFormComponent } from './category-form/category-form.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  @ViewChild(CategoryFormComponent) catForm: CategoryFormComponent;
  cats$: Observable<ICategory[]>;
  constructor(
    private store: Store<AppState>,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryService.loadData().subscribe(() => {});

    this.cats$ = this.store.select(getAllCategory);
  }

  // reset form
  onCloseModal() {
    this.catForm.resetForm();
  }

  onHandler(event) {}
}
