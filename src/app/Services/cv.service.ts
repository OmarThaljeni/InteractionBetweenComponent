import { Injectable } from '@angular/core';
import { Personne } from '../Models/Personne';
import { HttpClient, HttpParams } from '@angular/common/http';
import { filter, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private listPersonne: Personne[] = [];

  personne: Personne = new Personne();

  link  = "http://localhost:3000/api/personnes";

  constructor(public http: HttpClient) {
     this.listPersonne = [
      new Personne(1, 'Omar', 'THALJENI', 27, 'omar.png', '07189172', 'Ingénieur Informatique'),
      new Personne(2, 'Ezzdine', 'Draoui', 34, 'ezzdine.png', '21563625', 'Ingénieur Informatique'),
      new Personne(3, 'Samia', 'THALJENI', 34, 'samia.png', '78965412', 'Sage femme'),
      new Personne(4, 'Shayma', 'Werchafani', 27, 'shayma.png', '07189172', 'Ingénieur Informatique'),
    ]
 
  }

  updatePersonne(personne : Personne) {
    return this.http.put(this.link,personne);
    
  }

  getPersonne(): Observable<any> {
    return this.http.get(this.link);
  }

  getFakePersonne(): Personne[] {
    return this.listPersonne;
  }

  addPersonne(personne: Personne): Observable<any>{
/*     const token = localStorage.getItem('token');
    if(token)
    {
      const params = new HttpParams().set("access_token",token);
      return this.http.post(this.link,personne,{params});
  
    }
 */    return this.http.post(this.link,personne);
  }


  deletePersonne(id :number) : Observable<any> {
      return this.http.delete(this.link + `/${id}`);
  }



  addFakePersonne(personne: Personne): void {
    personne.id = this.listPersonne[this.listPersonne.length - 1].id + 1;
    this.listPersonne.push(personne);
  }


  getPersonnebyId(id: number): Observable<any> {
      return this.http.get(this.link+`/${id}`)
  }

  findByFirstName(firstName:string) : Observable<Personne[]>
    { 
     // const filter = `{"where": {"firstName":{"like": "%${firstName}%"}}}`;
      const filter = `{'where': {'firstName':{'like': '%th%'}}}`;
      const params = new HttpParams().set('filter',filter);
      return this.http.get<Personne[]>(this.link,{params});
    }
/* 
  getPersonnebyId(id: number): Personne {

    const find_object = this.listPersonne.find(x => x.id == id);
    if(find_object) {this.personne = find_object}
    else {return this.personne}
    return this.personne;
  }
 */


}
