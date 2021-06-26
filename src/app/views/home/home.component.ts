import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICourse } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course.service';
import { AppState } from 'src/app/store';
import { getAllCourses } from 'src/app/store/selectors/course.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: { class: 'root-child' },
})
export class HomeComponent implements OnInit {
  courses$: Observable<ICourse[]>;
  constructor(
    private courseService: CourseService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.courseService.loadCourses().subscribe(() => {});

    this.courses$ = this.store.select(getAllCourses);
  }
}
