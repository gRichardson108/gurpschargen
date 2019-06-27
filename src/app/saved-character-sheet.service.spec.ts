import { TestBed } from '@angular/core/testing';

import { SavedCharacterSheetService } from './saved-character-sheet.service';

describe('SavedCharacterSheetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SavedCharacterSheetService = TestBed.get(SavedCharacterSheetService);
    expect(service).toBeTruthy();
  });
});
