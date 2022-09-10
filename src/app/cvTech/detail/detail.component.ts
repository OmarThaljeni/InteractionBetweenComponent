import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/Models/Personne';
import { CvService } from 'src/app/Services/cv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  personne: Personne | any;


  constructor(private cvService: CvService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDetailPerson();
  }

  deletePersonne() {
    this.cvService.deletePersonne(this.personne.id).subscribe(res => {
      const link = ['PlateFormeRecrutement/CV']
      this.router.navigate(link);
      console.log(res);
    },
      error => {
        console.log(error);
      }
    )
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


  updatePersonne(id: number)
  {
      const link = ['PlateFormeRecrutement/updateCV',id];
      this.router.navigate(link);
  }


}
