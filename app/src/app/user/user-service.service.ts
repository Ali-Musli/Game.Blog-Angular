import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  user: any

  constructor(private http: HttpClient) { 
  }

  get isLogged() {
    return !!localStorage.getItem('auth')
  }

  get token() {
    return localStorage.getItem('auth')
  }

  login(email: string, password: string) {
    return this.http.post<any>('http://localhost:3030/users/login', {email, password}).pipe(tap((res) => {
      localStorage.setItem('auth', res.accessToken)
      this.user = res
    }))
  }

  register(email: string,username:string, password: string, rePassword: string) {
    return this.http.post<any>('http://localhost:3030/users/register', {email, username, password, rePassword}).pipe(tap((res) => {
      localStorage.setItem('auth', res.accessToken)
      this.user = res
    }))
  }

  logout() {
    return this.http.post('http://localhost:3030/users/logout', {}).pipe(tap(() => { 
      localStorage.removeItem('auth')
    }))
  }

  getUser() {
    return this.http.get('http://localhost:3030/users/me')
  }
}
