import { Injectable } from '@angular/core';
import { Personne } from '../Models/Personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private listPersonne: Personne[] = [];

  constructor() {
    this.listPersonne = [];
  }

  getEmbaucher(): Personne[] {
    return this.listPersonne;
  }

  embaucher(personne: Personne): void {
    const index = this.listPersonne.indexOf(personne);
    if (index < 0) {
      this.listPersonne.push(personne);
    }
    else {
      alert(`${personne.firstName} ${personne.lastName} est déja embauché !!`)
    }
  }


  debaucher(personne: Personne): void {
    const index = this.listPersonne.indexOf(personne);
    if (index >= 0) {
      this.listPersonne.splice(index, 1);
    }


  }

}
