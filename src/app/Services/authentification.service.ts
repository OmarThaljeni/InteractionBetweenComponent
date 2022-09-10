import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  link = "http://localhost:3000/api/Users/login";
  constructor(private http: HttpClient) { }

  login(credentials:any)
  {
    return this.http.post(this.link,credentials);
  }

  logout()
  {
    localStorage.removeItem("token");
  }

  isLoggedIn()
  {
    return !!localStorage.getItem('token');
  }

}
