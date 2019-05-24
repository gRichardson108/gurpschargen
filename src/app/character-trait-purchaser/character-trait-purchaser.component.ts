import { Component, OnInit } from '@angular/core';
import { IPurchasedCharacterTrait } from '../models/traits';
import { Attribute } from '../models/attribute';

@Component({
  selector: 'app-character-trait-purchaser',
  templateUrl: './character-trait-purchaser.component.html',
  styleUrls: ['./character-trait-purchaser.component.css']
})
export class CharacterTraitPurchaserComponent implements OnInit {

  purchased: IPurchasedCharacterTrait;

  constructor() {
    this.purchased = {
      trait: {
        name: "Strength",
        abbrev: "ST",
        cost: 10,
      } as Attribute,
      pointsSpent: 0
    }
  }

  ngOnInit() {
  }

  getTrait(): void {
  }

}
