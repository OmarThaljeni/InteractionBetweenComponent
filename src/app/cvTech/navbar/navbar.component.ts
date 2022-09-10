import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/Services/authentification.service';
import { CvService } from 'src/app/Services/cv.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(protected authentificationService: AuthentificationService) { }

  ngOnInit(): void {
  }

  logout()
  {
      this.authentificationService.logout();
  }

}
