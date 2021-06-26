import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ILessionCategory } from '../models/lession-category.model';
import { errorHandler } from '../utility';
import { Color } from '../utility/enums/color.enum ';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root',
})
export class LessionCategoryService {
  private data: ILessionCategory[] = [];
  dataChanged: Subject<ILessionCategory[]> = new Subject();
  url = environment.apiUrl + '/lession-category';

  constructor(private http: HttpClient, private alertService: AlertService) {}

  // load lession category
  loadRecords(params?: any) {
    const queryString = this.convertIntoQueryString(params);
    return this.http.get(`${this.url}?${queryString}`).pipe(
      catchError((error) => errorHandler(error, this.alertService)),
      tap((response: ILessionCategory[]) => {
        this.data = response;
        this.dataChanged.next(this.data.slice());
      })
    );
  }

  convertIntoQueryString(params) {
    return (
      params != null &&
      Object.keys(params)
        .map((key) => key + '=' + params[key])
        .join('&')
    );
  }

  // add / update lession category

  addUpdateRecord(
    record: ILessionCategory,
    id?: string
  ): Observable<ILessionCategory> {
    if (id) {
      return this.http.post<ILessionCategory>(this.url + '/' + id, record).pipe(
        catchError((error) => errorHandler(error, this.alertService)),
        tap((response: ILessionCategory) => {
          const index = this.data.findIndex((data) => data.id === id);
          this.data[index] = response;
          this.dataChanged.next(this.data.slice());
          this.alertService.alertShow({
            message: response.title + 'updated successfully',
            color: Color.success,
          });
        })
      );
    } else {
      return this.http.post<ILessionCategory>(this.url, record).pipe(
        catchError((error) => errorHandler(error, this.alertService)),
        tap((response: ILessionCategory) => {
          this.data.push(response);
          this.dataChanged.next(this.data.slice());
          this.alertService.alertShow({
            message: response.title + 'added successfully',
            color: Color.success,
          });
        })
      );
    }
  }

  // delete category
  removeRecord(id: string): Observable<ILessionCategory> {
    const confirm = window.confirm('Are you sure you want to delete');
    if (!confirm) return new Observable();
    return this.http.delete<ILessionCategory>(this.url + '/' + id).pipe(
      catchError((error) => errorHandler(error, this.alertService)),
      tap((response: ILessionCategory) => {
        const index = this.data.findIndex((data) => data.id === id);
        this.data.splice(index, 1);
        this.dataChanged.next(this.data.slice());
        this.alertService.alertShow({
          message: 'item deleted successfully',
          color: Color.success,
        });
      })
    );
  }

  activeInactiveItem(id: string, query: string): Observable<ILessionCategory> {
    return this.http.put(`${this.url}/${id}?status=${query}`, null).pipe(
      catchError((error) => errorHandler(error, this.alertService)),
      tap((response: any) => {
        const index = this.data.findIndex((x) => x.id === id);
        this.data[index] = response;
        this.dataChanged.next(this.data.slice());
        this.alertService.alertShow({
          message: `Lession section ${
            query == 'active' ? 'activated' : 'inactived'
          } successfully`,
          color: Color.success,
        });
      })
    );
  }
}
