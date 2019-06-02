import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { AttributeType, Attribute } from '../models/attribute';
import { Advantage } from '../models/advantage';

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
      Object.assign(new Attribute(), {name: 'Strength', abbrev: 'ST', cost: 10, type: AttributeType.Primary, description: ''}),
      Object.assign(new Attribute(), {name: 'Dexterity', abbrev: 'DX', cost: 20, type: AttributeType.Primary, description: ''}),
      Object.assign(new Attribute(), {name: 'Intelligence', abbrev: 'IQ', cost: 20, type: AttributeType.Primary, description: ''}),
      Object.assign(new Attribute(), {name: 'Health', abbrev: 'HT', cost: 10, type: AttributeType.Primary, description: ''}),
    ]
    this.pc.advantages = [
      Object.assign(new Advantage(), {name: 'Daredevil', cost: 15, type: Advantage}),
      Object.assign(new Advantage(), {name: 'High Pain Threshold', cost: 15, type: Advantage}),
    ]
  }

}
