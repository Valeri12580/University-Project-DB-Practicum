import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input()
  public tableFields: string[] = [];

  @Input()
  public data: any[] = [];

  public objectKeys: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.objectKeys = Object.keys(this.data[0]);
  }

}
