import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/Models/Personne';
import { CvService } from 'src/app/Services/cv.service';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {

  personne : Personne = new Personne();


  constructor(private activateRoute : ActivatedRoute, private cvService:CvService, private router : Router) { }

  ngOnInit() {
    this.getDetailPerson();
  }


  getDetailPerson() {
    this.activateRoute.params.subscribe((params) => {
      this.cvService.getPersonnebyId(params['id']).subscribe(res => {
        this.personne = res;
      },
        error => {
          console.log(error);
        }
      )
    })

  }

  updatePersonne()
  {
    this.cvService.updatePersonne(this.personne).subscribe(response => {
      const link = ["PlateFormeRecrutement/CV"];
      this.router.navigate(link);
    },
    error => {
      console.log(error);
      
    }
    )
  }

}
