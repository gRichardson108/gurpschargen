import { TestBed } from '@angular/core/testing';

import { CharacterTraitServiceService } from './character-trait-service.service';

describe('CharacterTraitServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharacterTraitServiceService = TestBed.get(CharacterTraitServiceService);
    expect(service).toBeTruthy();
  });
});
