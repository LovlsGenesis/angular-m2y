import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

// Datatable
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

// Models
import { User } from '../models/user'

// Services
import { UserService } from "../services/user.service"

/**
 * @title Table with filtering
 */
@Component({
  selector: 'datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})


export class DatatableComponent implements OnInit,AfterViewInit {
  user = {} as User
  users: User[] = []

  displayedColumns: string[] = ['name', 'cpf', 'account_ids', 'card_ids', 'registration_id', 'alias_bank', 'created_at', 'options'];
  dataSource = new MatTableDataSource(this.users);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userService: UserService) {
    // Assign the data to the data source for the table to render
  }

  ngOnInit(){
    let users = this.getCars
    this.dataSource = new MatTableDataSource(this.users);
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

  getCars() {
    this.userService.getUsers().subscribe((users: User[]) => {
      console.log(users)
      this.users = users;
    });
  }
}
