import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/Models/Personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {

  @Input() ListPersonne :Personne [] = [];
  @Output() selectedPersonne = new EventEmitter();

  personne : Personne = new Personne();
  
  constructor() { }

  ngOnInit() {
  }


  sendPersonne(personne:Personne)
  {
    this.selectedPersonne.emit(personne);
  }



}
