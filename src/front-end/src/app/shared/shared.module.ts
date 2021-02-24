import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataTableComponent} from './data-table/data-table.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [DataTableComponent],
  exports: [
    DataTableComponent

  ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule {
}
