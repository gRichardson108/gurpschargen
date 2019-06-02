import { Component, OnInit, Input } from '@angular/core';
import { PurchasedCharacterTrait, ICharacterTrait } from '../models/traits';
import { Attribute } from '../models/attribute';

@Component({
  selector: 'app-character-trait-purchaser',
  templateUrl: './character-trait-purchaser.component.html',
  styleUrls: ['./character-trait-purchaser.component.css']
})
export class CharacterTraitPurchaserComponent implements OnInit {

  @Input() trait: ICharacterTrait;
  public purchased: PurchasedCharacterTrait = new PurchasedCharacterTrait();

  constructor() {
  }

  ngOnInit() {
    this.purchased = Object.assign(this.purchased, {
      trait: this.trait,
      pointsSpent: 0,
      effectiveLevel: 0,
    });
  }

  increment(): void {
    this.purchased.pointsSpent++;
    this.purchased.effectiveLevel = this.purchased.trait.getEffectiveLevel(this.purchased.pointsSpent);
  }

  decrement(): void {
    this.purchased.pointsSpent--;
    this.purchased.effectiveLevel = this.purchased.trait.getEffectiveLevel(this.purchased.pointsSpent);
  }
}
