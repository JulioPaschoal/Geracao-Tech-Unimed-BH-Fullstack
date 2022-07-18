import { User } from './../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/044fd310-3710-4679-8079-4c81475dc336';
  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  // C.R.U.D - CREATE, READ, UPDATE, DELETE \\

  // READ RETORNA A LISTA DE USUARIOS \\
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  // CREATE SALVA USUARIO NO BANCO \\
  postUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions);
  }

    // DELETE EXCLUI USUARIO DO BANCO \\
    deleteUser(id: number):Observable<User> {
      return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`)
    }
  
    // UPDATE EDITA USUARIO \\
    updateUser(id: string, user: User):Observable<User> {
      return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`, user, this.httpOptions);
    }
  
    // LISTA UM UNICO USUARIO \\
    getUser(id: string):Observable<User[]> {
      return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`)
    }


}
