import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ICourse } from '../models/course.model';
import { AppState } from '../store';
import { loadCourse } from '../store/actions/course.action';
import { errorHandler } from '../utility';
import { Color } from '../utility';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private data: ICourse[];
  private dataUpdated: Subject<ICourse[]> = new Subject<ICourse[]>();
  private detail: ICourse;
  private detailUpdated: Subject<ICourse> = new Subject<ICourse>();
  url: string = environment.apiUrl + '/course';

  constructor(
    private http: HttpClient,
    private alertService: AlertService,
    private store: Store<AppState>
  ) {}

  /*******************************
   * Load courses
   */

  loadCourses() {
    return this.http.get<ICourse[]>(this.url).pipe(
      catchError((error) => errorHandler(error, this.alertService)),
      tap((response: ICourse[]) => {
        this.store.dispatch(loadCourse({ payload: response }));
      })
    );
  }

  /**
   * get course by id and slug
   * @param course
   * @param id
   * @returns
   */

  getCourseByIdOrSlug(id: string) {
    return this.http.get(this.url + '/' + id).pipe(
      catchError((error) => errorHandler(error, this.alertService)),
      tap((response: ICourse) => {
        this.detail = response;
        this.detailUpdated.next(this.detail);
      })
    );
  }

  /*******
   * Add course
   */

  addUpdateCourse(course: ICourse, id?: string): Observable<ICourse> {
    const formdata = new FormData();
    formdata.append('category', course.category.id);
    formdata.append('title', course.title);
    formdata.append('image', course.image);
    formdata.append('description', course.description);
    formdata.append('price', course.price.toString());
    formdata.append('offer', course.offer.toString());

    if (id) {
      return this.http.post<ICourse>(`${this.url}/${id}`, formdata).pipe(
        catchError((error) => errorHandler(error, this.alertService)),
        tap((response: ICourse) => {
          this.detail = response;
          this.detailUpdated.next(this.detail);
          this.alertService.alertShow({
            message: 'Course updated successfully!',
            color: Color.success,
          });
        })
      );
    } else {
      return this.http.post(this.url, formdata).pipe(
        catchError((error) => errorHandler(error, this.alertService)),
        tap((response: ICourse) => {
          this.data.push(response);
          this.dataUpdated.next(this.data.slice());
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

  deleteCourse(id: string) {
    const confirm = window.confirm('Are you sure! to delete this course?');
    if (!confirm) return new Observable();

    return this.http.delete(this.url + '/' + id).pipe(
      catchError((error) => errorHandler(error, this.alertService)),
      tap((response: ICourse) => {
        const index = this.data.findIndex((x) => x.id === id);
        this.data.splice(index, 1);
        this.dataUpdated.next(this.data.slice());
        this.alertService.alertShow({
          message: 'Course deleted successfully!',
          color: Color.success,
        });
      })
    );
  }

  // active / in-active category

  updateCourse(id: string, query: string): Observable<ICourse> {
    return this.http.put(`${this.url}/${id}/?status=${query}`, null).pipe(
      catchError((error) => errorHandler(error, this.alertService)),
      tap((response: any) => {
        const index = this.data.findIndex((x) => x.id === id);
        this.data[index] = response;
        this.dataUpdated.next(this.data.slice());
        this.alertService.alertShow({
          message: 'Course ' + query + ' successfully',
          color: Color.success,
        });
      })
    );
  }
}
