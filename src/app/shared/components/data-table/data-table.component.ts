import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TABLE_RANGE } from 'src/app/utility';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit, AfterViewChecked {
  @Input() data: any;
  @Input() heading: string[] = [];
  @Input() hideColumns: string[] = ['id'];
  @Input() limit: number = 10;
  @Input() setting: boolean = true;
  @Output() handler = new EventEmitter<{ status: string; data: any }>();
  filteredData: any;
  colspan: number;
  tableRange: number[] = [];

  constructor() {}

  ngOnInit(): void {
    this.tableRange = TABLE_RANGE;
    this.filteredData = this.data;
    // colspan
    this.colspan =
      this.data.length > 0 ? Object.keys(this.data[0]).length + 1 : 0;

    console.log(this.data, this.filteredData);
  }

  ngOnChanges(changes: SimpleChanges) {
    // this.filteredData = this.data = changes.currentValue;
  }

  ngAfterViewChecked() {
    if (this.data) {
      this.filteredData = this.data;
    }
  }

  onSearch(value: string) {
    if (value !== '') {
      this.filteredData = this.data.filter((item: any) => {
        return Object.keys(item).some((key) =>
          item[key].toString().toLowerCase().includes(value.toLowerCase())
        );
      });
    } else {
      this.filteredData = this.data;
    }
  }

  // track by id
  trackById(id: string, row: any) {
    return row.id;
  }

  onHandler(status: string, data: any) {
    this.handler.emit({ status, data });
  }
}
