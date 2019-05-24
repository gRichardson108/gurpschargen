import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { AttributeType, Attribute } from '../models/attribute';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.css']
})
export class CharacterFormComponent implements OnInit {
  
  advantageLimit: number = 75;
  disadvantageLimit: number = -25;

  pc: Character = new Character();

  constructor() { }

  ngOnInit() {
    this.pc.attributes = [
      {name: 'Strength', abbrev: 'ST', cost: 10, type: AttributeType.Primary, description: ''} as Attribute,
    ]
  }

}
