import { Component, Input, OnInit } from '@angular/core';
import { Personne } from 'src/app/Models/Personne';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {

  @Input() personne :Personne = new Personne();
  constructor() { }

  ngOnInit(): void {
  }


}
