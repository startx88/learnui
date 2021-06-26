import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ILession } from '../models/lession.model';
import { errorHandler } from '../utility';
import { Color } from '../utility/enums/color.enum ';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root',
})
export class LessionService {
  private data: ILession[] = [];
  dataChanged: Subject<ILession[]> = new Subject();

  private detail: ILession = null;
  detailUpdated: Subject<ILession> = new Subject();

  url = environment.apiUrl + '/lession';

  constructor(private http: HttpClient, private alertService: AlertService) {}

  // load all lessions
  loadLessions() {
    return this.http.get(this.url).pipe(
      catchError((error) => errorHandler(error, this.alertService)),
      tap((response: ILession[]) => {
        this.data = response;
        this.dataChanged.next(this.data.slice());
      })
    );
  }

  // get lessions by course id
  loadLessionsByCourse(courseId: string): Observable<ILession[]> {
    return this.http.get<ILession[]>(this.url + '/' + courseId).pipe(
      catchError((error) => errorHandler(error, this.alertService)),
      tap((response: ILession[]) => {
        this.data = response;
        this.dataChanged.next(this.data.slice());
      })
    );
  }

  // get lessions by course id
  getLessionById(courseId: string, id: string): Observable<ILession> {
    return this.http.get<ILession>(`${this.url}/${courseId}/detail/${id}`).pipe(
      catchError((error) => errorHandler(error, this.alertService)),
      tap((response: ILession) => {
        this.detail = response;
        this.detailUpdated.next(this.detail);
      })
    );
  }

  /*******
   * Add course
   */

  addUpdateLessionRecord(lession: ILession, id?: string): Observable<ILession> {
    const lessionData = {
      title: lession.title,
      description: lession.description,
      category: lession.category.id,
      course: lession.course.id,
    };
    if (id) {
      return this.http.post<ILession>(`${this.url}/${id}`, lessionData).pipe(
        catchError((error) => errorHandler(error, this.alertService)),
        tap((response: ILession) => {
          this.detail = response;
          this.detailUpdated.next(this.detail);
          this.alertService.alertShow({
            message: 'Course updated successfully!',
            color: Color.success,
          });
        })
      );
    } else {
      return this.http.post(this.url, lessionData).pipe(
        catchError((error) => errorHandler(error, this.alertService)),
        tap((response: ILession) => {
          this.data.push(response);
          this.dataChanged.next(this.data.slice());
          this.alertService.alertShow({
            message: 'Course added successfully!',
            color: Color.success,
          });
        })
      );
    }
  }

  /*******
   * Delete course
   */

  deleteLessionRecord(id: string) {
    const confirm = window.confirm('Are you sure! to delete this course?');
    if (!confirm) return new Observable();
    return this.http.delete(this.url + '/' + id).pipe(
      catchError((error) => errorHandler(error, this.alertService)),
      tap((response: ILession) => {
        const index = this.data.findIndex((x) => x.id === id);
        this.data.splice(index, 1);
        this.dataChanged.next(this.data.slice());
        this.alertService.alertShow({
          message: 'Course deleted successfully!',
          color: Color.success,
        });
      })
    );
  }
}
