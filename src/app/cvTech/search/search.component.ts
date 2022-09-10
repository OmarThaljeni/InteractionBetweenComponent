import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Models/Personne';
import { CvService } from 'src/app/Services/cv.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResult : Personne[] | undefined;

  constructor(private cvService : CvService) { }

  ngOnInit(): void {
    this.searchResult = [];
  }

  search(chaine: any)
  {    
    let firstName = chaine.value;
    firstName = firstName.trim();
    console.log("==> ",firstName);
    
    if(firstName) {
      this.cvService.findByFirstName(firstName).subscribe(res => 
        {    
          console.log("res",firstName);
                
          this.searchResult = res;
        },
        error => {
          console.log(error);   
        })
    }
    else
    {
      this.searchResult = [];
    }
    
  }

  selectPersonne(personne : Personne)
  { 

  }

}
