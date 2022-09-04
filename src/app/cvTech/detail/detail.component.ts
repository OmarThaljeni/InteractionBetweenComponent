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

 personne :Personne | any;


  constructor(private cvService : CvService, private router : Router, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.personne = this.cvService.getPersonnebyId(params['id']);      
    })
  }






}
