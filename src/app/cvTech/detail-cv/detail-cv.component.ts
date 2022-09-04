import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Personne } from 'src/app/Models/Personne';
import { EmbaucheService } from 'src/app/Services/embauche.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {

  @Input() personne: Personne = new Personne();
  constructor(private embaucheService: EmbaucheService, private router : Router) { }

  ngOnInit(): void {
  }


  embaucherPersonne() {
    this.embaucheService.embaucher(this.personne);
  }


  debaucherPersonne()
  {
    this.embaucheService.debaucher(this.personne);
  }

  MoreInfo()
  {
    const link = ['PlateFormeRecrutement/detail',this.personne.id];
    this.router.navigate(link);
  }


}
