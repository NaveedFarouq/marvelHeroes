import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharServiceService {

  constructor(private http: HttpClient) { 
    this.getCharacterList().subscribe(data => {
      console.log(data)
    })
  }

  public getCharacterList() {

    return this.http.get('./assets/data/allcharacters.json')
  }
}
