import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  @Input() title: string;
  @Input() status: string;
  @Input() type: string;
  @Input() level: number;
  urlTitles: string;
  current: string;
  links: string[];
  lastpath: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const urls = this.router.url.split('/').filter((path) => path != '');
    this.links = urls;
    this.current = urls[0];
    this.lastpath = urls[urls.length - 1];
    this.urlTitles = urls[urls.length - 1].split('?')[0];
  }
}
