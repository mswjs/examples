import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(user: { username: string }) {
    return this.http.post<User>(`/login`, user);
  }
}
