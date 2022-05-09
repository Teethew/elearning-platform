import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginUser, IPostUser, IUser } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(readonly http: HttpClient) { }

  login(user: ILoginUser): Observable<boolean> {
    return this.http.post<boolean>('http://127.0.0.1:9001/login', user)
  }

  createUser(user: IUser): Observable<boolean> {
    return this.http.post<boolean>('http://127.0.0.1:9001/users', user)
  }

}
