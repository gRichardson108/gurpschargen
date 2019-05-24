import { TestBed } from '@angular/core/testing';

import { CharacterFormRendererService } from './character-form-renderer.service';

describe('CharacterFormRendererService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharacterFormRendererService = TestBed.get(CharacterFormRendererService);
    expect(service).toBeTruthy();
  });
});
