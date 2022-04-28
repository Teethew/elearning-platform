import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPostUser, IUser } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(readonly http: HttpClient) { }

  createUser(user: IPostUser): Observable<any> {
    return this.http.post('http://127.0.0.1:3000/users', user)
  }
}
