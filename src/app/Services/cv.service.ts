import { Injectable } from '@angular/core';
import { Personne } from '../Models/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private listPersonne: Personne[] = [];

  constructor() {
    this.listPersonne = [
      new Personne('1', 'Omar', 'THALJENI', 27, 'omar.png', '07189172', 'Ingénieur Informatique'),
      new Personne('2', 'Ezzdine', 'Draoui', 34, 'ezzdine.png', '21563625', 'Ingénieur Informatique'),
      new Personne('3', 'Samia', 'THALJENI', 34, 'samia.png', '78965412', 'Sage femme'),
      new Personne('4', 'Shayma', 'Werchafani', 27, 'shayma.png', '07189172', 'Ingénieur Informatique'),
    ]

  }

  getPersonne() :Personne[] {
    return this.listPersonne;
  }

}
