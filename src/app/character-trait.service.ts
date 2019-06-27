import { Injectable } from '@angular/core';
import { PurchasedCharacterTrait } from './models/traits';
import { ISavedCharacterSheetService, SavedCharacterSheetService } from './saved-character-sheet.service';

/**
 * This service can be used to share character trait details and points spent between components.
 */
@Injectable({
  providedIn: 'root'
})
export class CharacterTraitService implements ICharacterTraitService {
  
  private sheetService: ISavedCharacterSheetService;
  private characterTraits: Map<string, PurchasedCharacterTrait>;
  private characterKey: string;
  
  constructor(sheetService: SavedCharacterSheetService) {
    this.sheetService = sheetService;
    this.characterKey = this.sheetService.createNewSheet();
    this.characterTraits = this.sheetService.getSavedSheet(this.characterKey);
  }

  getTrait(traitName: string): PurchasedCharacterTrait {
    return this.characterTraits.get(traitName);
  }

  setTrait(traitName: string, trait: PurchasedCharacterTrait){
    let traitSelected = this.characterTraits.get(traitName);
    if (!traitSelected){
      traitSelected = trait;
    } else {
      Object.assign(traitSelected, trait);
    }
    
    this.characterTraits.set(traitName, traitSelected);
  }
}

export interface ICharacterTraitService {
  getTrait(traitName: string): PurchasedCharacterTrait;
  setTrait(traitName: string, trait: PurchasedCharacterTrait);
}