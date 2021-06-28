import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { ICategory } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { AppState } from '..';
import { setAlertShow, setLoadingSpinner } from '../actions';
import {
  categoryAddStart,
  categoryAddSuccess,
  fetchAllCategory,
  startLoading,
} from '../actions/category.action';

@Injectable()
export class CategoryEffect {
  // get all categories
  loadCategories$: Observable<ICategory[]> = createEffect(() =>
    this.action$.pipe(
      ofType(startLoading),
      exhaustMap((action: any) => {
        return this.catService.loadData().pipe(
          map((response: ICategory[]) => {
            return fetchAllCategory({ payload: response });
          })
        );
      }),
      catchError((error) => of(error))
    )
  );

  // add category
  addCategory: Observable<ICategory> = createEffect(() =>
    this.action$.pipe(
      ofType(categoryAddStart),
      exhaustMap((action) => {
        const { title, description, offer } = action;
        return this.catService.addItem({ title, description, offer }).pipe(
          map((response: ICategory) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return categoryAddSuccess({ payload: response });
          })
        );
      }),
      catchError((error) => {
        this.store.dispatch(setLoadingSpinner({ status: false }));
        this.store.dispatch(
          setAlertShow({ message: error.error.errors.message })
        );
        return of(null);
      })
    )
  );

  constructor(
    private action$: Actions,
    private catService: CategoryService,
    private store: Store<AppState>
  ) {}
}
