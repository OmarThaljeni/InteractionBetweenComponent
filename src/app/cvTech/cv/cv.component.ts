import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Models/Personne';
import { CvService } from 'src/app/Services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  listPersonne: Personne[] = [];

  personne : Personne = new Personne();

  constructor(private cvService : CvService) {     
  }

  ngOnInit() {    
    this.listPersonne = this.cvService.getPersonne();
  }


  recievePersonne(pers : Personne)
  {
    this.personne=pers;
  }

}
