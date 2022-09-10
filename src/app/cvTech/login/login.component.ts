import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/Services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authentificationService: AuthentificationService, private router: Router) { }

  ngOnInit(): void {
  }

  login(credentials: any) {
    this.authentificationService.login(credentials).subscribe(
      (response: any) => {
        const token = response.id;
        const link = ['PlateFormeRecrutement/CV'];
        localStorage.setItem('token', token);
        this.router.navigate(link);
      },
      error => {
        console.log(error);
      }
    );
  }


}

