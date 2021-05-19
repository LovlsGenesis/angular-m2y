import { NgModule } from '@angular/core';
import { DatatableComponent } from './datatable.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";


@NgModule({
  imports: [
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [DatatableComponent],
  providers: [],
  declarations: [DatatableComponent],
})

export class DatatableModule {

}
