import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/Models/Personne';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.css']
})
export class ListeCvComponent implements OnInit {

  @Input() listCv :Personne [] = [];
  @Output() personneSended = new EventEmitter();

  personne : Personne = new Personne();

  constructor() { }

  ngOnInit(): void {
  }

  selectPersonne(personne :Personne)
  {    
    this.personneSended.emit(personne);
  }


}
