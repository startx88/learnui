import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { ICategory } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import {
  categoryAddSuccess,
  CATEGORY_ADD_START,
  fetchAllCategory,
  startLoading,
} from '../actions/category.action';

@Injectable()
export class CategoryEffect {
  // get all categories
  categories$: Observable<ICategory[]> = createEffect(() =>
    this.action$.pipe(
      ofType(startLoading),
      exhaustMap((action: any) => {
        console.log('a', action);
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
      ofType(CATEGORY_ADD_START),
      exhaustMap((action: { title: string; description: string }) =>
        this.catService.addItem(action).pipe(
          map((response: ICategory) => {
            return categoryAddSuccess({ payload: response });
          })
        )
      ),
      catchError((error) => of(error))
    )
  );

  constructor(private action$: Actions, private catService: CategoryService) {}
}
