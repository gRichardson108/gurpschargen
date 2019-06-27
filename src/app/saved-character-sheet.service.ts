import { Injectable } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import { PurchasedCharacterTrait } from './models/traits';
import { PURCHASED } from './DummyTraits';

/**
 * This concrete implementation only serves as a dummy interface since there's no server backend for storing sheets yet. It always makes a new sheet.
 */
@Injectable({
  providedIn: 'root'
})
export class SavedCharacterSheetService implements ISavedCharacterSheetService {
  createNewSheet(): string {
    return "dummy-key";
  }

  constructor() { }

  getSavedSheet(characterKey: string): Map<string, PurchasedCharacterTrait> {
    let charmap = new Map<string, PurchasedCharacterTrait>();
    for (const key in PURCHASED) {
      if (PURCHASED.hasOwnProperty(key)) {
        const element = PURCHASED[key];
        charmap.set(key, element);
      }
    }
    return charmap;
  }
}

/**
 * This service can be used to fetch saved character details by their name.
 */
export interface ISavedCharacterSheetService {
  getSavedSheet(characterKey: string): Map<string, PurchasedCharacterTrait>;
  createNewSheet(): string;
}