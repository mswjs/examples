import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { User } from './models'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get<User>('https://api.example.com/user')
  }
}
