import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { IFile } from 'src/app/models/file.model';
import { Color } from 'src/app/utility';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  @Input() name: string;
  @Input() color: Color = Color.gray;
  @Input() validation: string;
  @Input() multipe: boolean = false;
  @Input() selected: string;

  @Output() select = new EventEmitter<File[]>();
  constructor() {}

  ngOnInit(): void {}

  // upload
  onUpload(event: Event) {
    const files = Array.from((<HTMLInputElement>event.target).files);

    for (let file of files) {
      Object.defineProperty(file, 'url', {
        value: file,
        enumerable: true,
        configurable: true,
        writable: true,
      });
    }

    this.select.emit(files);
  }
}
