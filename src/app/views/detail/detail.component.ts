import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ICourse } from 'src/app/models/course.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  host: { class: 'root-child' },
})
export class DetailComponent implements OnInit {
  detail: ICourse;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((response: ICourse) => {
      console.log(response);
      this.detail = response['detail'];
    });
  }
}
