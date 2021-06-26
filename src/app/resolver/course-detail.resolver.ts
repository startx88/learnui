import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ICourse } from '../models/course.model';
import { CourseService } from '../services/course.service';

@Injectable({
  providedIn: 'root',
})
export class CourseDetailResolver implements Resolve<ICourse> {
  constructor(private courseService: CourseService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ICourse> | ICourse {
    const id = route.paramMap.get('slug');
    return this.courseService.getCourseByIdOrSlug(id);
  }
}
