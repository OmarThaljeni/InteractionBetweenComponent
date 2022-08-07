import { Component, Input, OnInit } from '@angular/core';
import { Personne } from 'src/app/Models/Personne';
import { EmbaucheService } from 'src/app/Services/embauche.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {

  @Input() personne: Personne = new Personne();
  constructor(private embaucheService: EmbaucheService) { }

  ngOnInit(): void {
  }


  embaucherPersonne() {
    this.embaucheService.embaucher(this.personne);
  }


  debaucherPersonne()
  {
    this.embaucheService.debaucher(this.personne);
  }


}
