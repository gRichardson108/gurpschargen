import { Component, OnInit, Input } from '@angular/core';
import { PurchasedCharacterTrait, ICharacterTrait } from '../models/traits';
import { Attribute } from '../models/attribute';
import { ICharacterTraitService, CharacterTraitService } from '../character-trait.service';

@Component({
  selector: 'app-character-trait-purchaser',
  templateUrl: './character-trait-purchaser.component.html',
  styleUrls: ['./character-trait-purchaser.component.css']
})
export class CharacterTraitPurchaserComponent implements OnInit {

  @Input() traitName: string;

  private traitService: ICharacterTraitService;
  private purchased: PurchasedCharacterTrait;

  constructor(traitService: CharacterTraitService) {
    this.traitService = traitService;
  }

  ngOnInit() {
    this.purchased = this.traitService.getTrait(this.traitName);
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
