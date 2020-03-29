import { Component, OnInit } from '@angular/core';
import { CharServiceService } from '../char-service.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  constructor( private charService: CharServiceService) { }

  ngOnInit() {
    // this.getListOfChar()
  }

  getListOfChar(){
    console.log(this.charService.getCharacterList());
  }

}
