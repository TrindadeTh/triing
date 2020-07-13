import { TestBed } from '@angular/core/testing';

import { ContadorFirebaseService } from './contador-firebase.service';

describe('ContadorFirebaseService', () => {
  let service: ContadorFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContadorFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
