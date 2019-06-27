import { TestBed } from '@angular/core/testing';

import { CharacterTraitService } from './character-trait.service';

describe('CharacterTraitServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharacterTraitService = TestBed.get(CharacterTraitService);
    expect(service).toBeTruthy();
  });
});
