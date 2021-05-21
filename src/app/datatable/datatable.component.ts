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


export class DatatableComponent implements OnInit {
  user = {} as User
  users: User[] = []

  displayedColumns: string[] = ['name', 'cpf', 'account_ids', 'card_ids', 'registration_id', 'alias_bank', 'created_at', 'options'];
  dataSource = new MatTableDataSource(this.users);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userService: UserService) {
    // Assign the data to the data source for the table to render
  }

  ngOnInit() {
    this.getUsers();
  }

  title = 'Usuários';

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.dataSource = new MatTableDataSource(users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
