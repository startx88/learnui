import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ICategory } from '../models/category.model';
import { AppState } from '../store';
import {
  fetchAllCategory,
  startLoading,
} from '../store/actions/category.action';
import { Color } from '../utility';
import { errorHandler } from '../utility/error-handler';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private _data: ICategory[] = [];
  dataChanged: Subject<ICategory[]> = new Subject();
  url = environment.apiUrl + '/category';

  constructor(
    private http: HttpClient,
    private alertService: AlertService,
    private store: Store<AppState>
  ) {}

  // load categories
  loadData(): Observable<ICategory[]> {
    this.store.dispatch(startLoading());
    return this.http.get<ICategory[]>(this.url).pipe(
      catchError((error) => errorHandler(error, this.alertService)),
      tap((response: ICategory[]) => {
        this._data = response;
        this.dataChanged.next(this._data.slice());
        this.store.dispatch(fetchAllCategory({ payload: response }));
      })
    );
  }

  getCategoryById(id: string): ICategory {
    const cat = this._data.find((c: ICategory) => c.id === id);

    return cat;
  }

  // add / update category

  addItem(category: ICategory, id?: string): Observable<ICategory> {
    if (id) {
      return this.http.post<ICategory>(this.url + '/' + id, category).pipe(
        catchError((error) => errorHandler(error, this.alertService)),
        tap((response: ICategory) => {
          this.alertService.alertShow({
            message: response.title + 'updated successfully',
            color: Color.success,
          });
        })
      );
    } else {
      return this.http.post<ICategory>(this.url, category).pipe(
        catchError((error) => errorHandler(error, this.alertService)),
        tap((response: ICategory) => {
          this.alertService.alertShow({
            message: response.title + 'added successfully',
            color: Color.success,
          });
        })
      );
    }
  }

  // delete category
  removeItem(id: string): Observable<ICategory> {
    const confirm = window.confirm('Are you sure you want to delete');
    if (!confirm) return new Observable();
    return this.http.delete<ICategory>(this.url + '/' + id);
  }

  // active / in-active category

  activeInactiveItem(id: string, query: string): Observable<ICategory> {
    return this.http.put(`${this.url}/${id}?status=${query}`, null).pipe(
      catchError((error) => errorHandler(error, this.alertService)),
      tap((response: any) => {
        const index = this._data.findIndex((x) => x.id === id);
        this._data[index] = response;
        this.dataChanged.next(this._data.slice());
        this.alertService.alertShow({
          message: `Category ${
            query == 'active' ? 'activated' : 'inactived'
          } successfully`,
          color: Color.success,
        });
      })
    );
  }
}
