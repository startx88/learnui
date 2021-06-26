import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/models/course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent implements OnInit {
  @Input() course: ICourse;
  @Input() type: string = 'vert';

  constructor() {}

  ngOnInit(): void {}
}
