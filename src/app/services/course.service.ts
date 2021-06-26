import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ICourse } from '../models/course.model';
import { AppState } from '../store';
import { loadCourse } from '../store/actions/course.action';
import { errorHandler } from '../utility';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private url: string = environment.apiUrl + '/course';

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  // load courses
  loadCourses() {
    return this.http.get(this.url).pipe(
      catchError((error) => errorHandler(error, this.store)),
      tap((response: ICourse[]) => {
        this.store.dispatch(loadCourse({ payload: response }));
      })
    );
  }
}
