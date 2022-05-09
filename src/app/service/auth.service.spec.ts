import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    const auth = new AuthService(http)
    expect(auth).toBeTruthy();
  });
});
