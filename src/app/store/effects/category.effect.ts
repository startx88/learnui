import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { ICategory } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { fetchAllCategory, startLoading } from '../actions/category.action';

@Injectable()
export class CategoryEffect {
  // get all categories
  categories$ = createEffect(() =>
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

  constructor(private action$: Actions, private catService: CategoryService) {}
}
