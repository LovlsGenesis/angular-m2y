import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://127.0.0.1:3000/users'

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Bate na api para recuperar a lista de usuários
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  // Handling error
  handleError(error: HttpErrorResponse) {
    let errorMessage = { error: 400, message: '' };
    if (error.error instanceof ErrorEvent) {
      errorMessage['message'] = error.error.message
    } else {
      errorMessage = { error: error.status, message: error.message }
    }
    console.log(errorMessage)
    return throwError(errorMessage)
  }

}
