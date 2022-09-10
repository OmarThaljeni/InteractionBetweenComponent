import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CvService } from 'src/app/Services/cv.service';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {

  errorMessage ='';
  constructor(private cvService: CvService, private router: Router) { }

  ngOnInit(): void {
  }

  addPersonne(formulaire: NgForm) {
    const link = ["PlateFormeRecrutement/CV"];
    //   this.cvService.addPersonne(formulaire.value);
    console.log(formulaire.value);
    this.cvService.addPersonne(formulaire.value).subscribe(res => {
      console.log(res);
      this.router.navigate(link);
    },
      error => {
        this.errorMessage="Probléme de connection a votre serveur, Priére de consulter l'administrateur !!"
        console.log(error);
      }

    )
  }

}
