import { TestBed } from '@angular/core/testing';

import { SomaService } from './soma.service';

describe('SomaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SomaService = TestBed.get(SomaService);
    expect(service).toBeTruthy();
  });

  it('deve retornar 7', () => {
    const service: SomaService = TestBed.get(SomaService);

    expect(service.soma(2,5)).toBe(7);
  })
});
