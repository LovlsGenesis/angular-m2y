import { NgModule } from '@angular/core';

import { DatatableComponent } from './datatable.component'

// Modulos da Datatable
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatButtonModule
  ],
  exports: [DatatableComponent],
  providers: [],
  declarations: [DatatableComponent],
})

export class DatatableModule {

}
