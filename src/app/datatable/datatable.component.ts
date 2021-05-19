// import {Component} from '@angular/core';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

export interface User {
  name: string;
  cpf: string;
  account_ids: number[];
  card_ids: number[];
  registration_id: string;
  alias_bank: string;
  created_at: string;
  options: string[]
}



const ELEMENT_DATA: User[] = [
  {name: 'Guillaume Zeldine', cpf: "238.304.038-01", account_ids: [1], card_ids: [234, 346], registration_id: '86ee2682-ff64-4dc5-9fe9-5c5ad362e556',alias_bank: "655 1111 5772529 - 7", created_at: "02/03/2021 13:08", options: ['Test', 'Test 2']},
  {name: 'Test Test', cpf: "999.999.999-99", account_ids: [2], card_ids: [159], registration_id: '6358f8c3-666d-41b3-8703-6f5e42c0586f',alias_bank: "655 1111 5772513 - 7", created_at: "21/01/2021 17:55", options: ['Test', 'Test 2']},
  {name: 'Bertrano Silva', cpf: "999.999.999-99", account_ids: [Math.round(Math.random() * 1000)], card_ids: [Math.round(Math.random() * 1000)], registration_id: 'bc13c071-6d5e-4107-8068-cdab5e893caa', alias_bank: "655 1111 5772513 - 6", created_at: "21/01/2021 18:12", options: ['Test', 'Test 2']},
  {name: 'Bertrano Silva', cpf: "999.999.999-99", account_ids: [Math.round(Math.random() * 1000)], card_ids: [Math.round(Math.random() * 1000)], registration_id: 'bc13c071-6d5e-4107-8068-cdab5e893caa', alias_bank: "655 1111 5772513 - 6", created_at: "21/01/2021 18:12", options: ['Test', 'Test 2']},
  {name: 'Bertrano Silva', cpf: "999.999.999-99", account_ids: [Math.round(Math.random() * 1000)], card_ids: [Math.round(Math.random() * 1000)], registration_id: 'bc13c071-6d5e-4107-8068-cdab5e893caa', alias_bank: "655 1111 5772513 - 6", created_at: "21/01/2021 18:12", options: ['Test', 'Test 2']},
  {name: 'Bertrano Silva', cpf: "999.999.999-99", account_ids: [Math.round(Math.random() * 1000)], card_ids: [Math.round(Math.random() * 1000)], registration_id: 'bc13c071-6d5e-4107-8068-cdab5e893caa', alias_bank: "655 1111 5772513 - 6", created_at: "21/01/2021 18:12", options: ['Test', 'Test 2']},
  {name: 'Bertrano Silva', cpf: "999.999.999-99", account_ids: [Math.round(Math.random() * 1000)], card_ids: [Math.round(Math.random() * 1000)], registration_id: 'bc13c071-6d5e-4107-8068-cdab5e893caa', alias_bank: "655 1111 5772513 - 6", created_at: "21/01/2021 18:12", options: ['Test', 'Test 2']},
  {name: 'Bertrano Silva', cpf: "999.999.999-99", account_ids: [Math.round(Math.random() * 1000)], card_ids: [Math.round(Math.random() * 1000)], registration_id: 'bc13c071-6d5e-4107-8068-cdab5e893caa', alias_bank: "655 1111 5772513 - 6", created_at: "21/01/2021 18:12", options: ['Test', 'Test 2']},
  {name: 'Bertrano Silva', cpf: "999.999.999-99", account_ids: [Math.round(Math.random() * 1000)], card_ids: [Math.round(Math.random() * 1000)], registration_id: 'bc13c071-6d5e-4107-8068-cdab5e893caa', alias_bank: "655 1111 5772513 - 6", created_at: "21/01/2021 18:12", options: ['Test', 'Test 2']},
  {name: 'Bertrano Silva', cpf: "999.999.999-99", account_ids: [Math.round(Math.random() * 1000)], card_ids: [Math.round(Math.random() * 1000)], registration_id: 'bc13c071-6d5e-4107-8068-cdab5e893caa', alias_bank: "655 1111 5772513 - 6", created_at: "21/01/2021 18:12", options: ['Test', 'Test 2']},
  {name: 'Bertrano Silva', cpf: "999.999.999-99", account_ids: [Math.round(Math.random() * 1000)], card_ids: [Math.round(Math.random() * 1000)], registration_id: 'bc13c071-6d5e-4107-8068-cdab5e893caa', alias_bank: "655 1111 5772513 - 6", created_at: "21/01/2021 18:12", options: ['Test', 'Test 2']},
  {name: 'Bertrano Silva', cpf: "999.999.999-99", account_ids: [Math.round(Math.random() * 1000)], card_ids: [Math.round(Math.random() * 1000)], registration_id: 'bc13c071-6d5e-4107-8068-cdab5e893caa', alias_bank: "655 1111 5772513 - 6", created_at: "21/01/2021 18:12", options: ['Test', 'Test 2']},
  {name: 'Bertrano Silva', cpf: "999.999.999-99", account_ids: [Math.round(Math.random() * 1000)], card_ids: [Math.round(Math.random() * 1000)], registration_id: 'bc13c071-6d5e-4107-8068-cdab5e893caa', alias_bank: "655 1111 5772513 - 6", created_at: "21/01/2021 18:12", options: ['Test', 'Test 2']},
  {name: 'Bertrano Silva', cpf: "999.999.999-99", account_ids: [Math.round(Math.random() * 1000)], card_ids: [Math.round(Math.random() * 1000)], registration_id: 'bc13c071-6d5e-4107-8068-cdab5e893caa', alias_bank: "655 1111 5772513 - 6", created_at: "21/01/2021 18:12", options: ['Test', 'Test 2']},
  {name: 'Bertrano Silva', cpf: "999.999.999-99", account_ids: [Math.round(Math.random() * 1000)], card_ids: [Math.round(Math.random() * 1000)], registration_id: 'bc13c071-6d5e-4107-8068-cdab5e893caa', alias_bank: "655 1111 5772513 - 6", created_at: "21/01/2021 18:12", options: ['Test', 'Test 2']},
  {name: 'Bertrano Silva', cpf: "999.999.999-99", account_ids: [Math.round(Math.random() * 1000)], card_ids: [Math.round(Math.random() * 1000)], registration_id: 'bc13c071-6d5e-4107-8068-cdab5e893caa', alias_bank: "655 1111 5772513 - 6", created_at: "21/01/2021 18:12", options: ['Test', 'Test 2']},
  {name: 'Bertrano Silva', cpf: "999.999.999-99", account_ids: [Math.round(Math.random() * 1000)], card_ids: [Math.round(Math.random() * 1000)], registration_id: 'bc13c071-6d5e-4107-8068-cdab5e893caa', alias_bank: "655 1111 5772513 - 6", created_at: "21/01/2021 18:12", options: ['Test', 'Test 2']},
  {name: 'Bertrano Silva', cpf: "999.999.999-99", account_ids: [Math.round(Math.random() * 1000)], card_ids: [Math.round(Math.random() * 1000)], registration_id: 'bc13c071-6d5e-4107-8068-cdab5e893caa', alias_bank: "655 1111 5772513 - 6", created_at: "21/01/2021 18:12", options: ['Test', 'Test 2']},
  {name: 'Bertrano Silva', cpf: "999.999.999-99", account_ids: [Math.round(Math.random() * 1000)], card_ids: [Math.round(Math.random() * 1000)], registration_id: 'bc13c071-6d5e-4107-8068-cdab5e893caa', alias_bank: "655 1111 5772513 - 6", created_at: "21/01/2021 18:12", options: ['Test', 'Test 2']},
  {name: 'Bertrano Silva', cpf: "999.999.999-99", account_ids: [Math.round(Math.random() * 1000)], card_ids: [Math.round(Math.random() * 1000)], registration_id: 'bc13c071-6d5e-4107-8068-cdab5e893caa', alias_bank: "655 1111 5772513 - 6", created_at: "21/01/2021 18:12", options: ['Test', 'Test 2']},
  {name: 'Bertrano Silva', cpf: "999.999.999-99", account_ids: [Math.round(Math.random() * 1000)], card_ids: [Math.round(Math.random() * 1000)], registration_id: 'bc13c071-6d5e-4107-8068-cdab5e893caa', alias_bank: "655 1111 5772513 - 6", created_at: "21/01/2021 18:12", options: ['Test', 'Test 2']},
];

/**
 * @title Table with filtering
 */
@Component({
  selector: 'datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})

export class DatatableComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'cpf', 'account_ids', 'card_ids', 'registration_id', 'alias_bank', 'created_at', 'options'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  title = 'Usuários';

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
