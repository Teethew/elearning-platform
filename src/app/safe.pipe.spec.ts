import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

import { SafePipe } from './safe.pipe';

describe('SafePipe', () => {
  let dom: DomSanitizer

  beforeEach(() => {
    TestBed.configureTestingModule({});
    dom = TestBed.inject(DomSanitizer);
  });

  it('create an instance', () => {
    const pipe = new SafePipe(dom);
    expect(pipe).toBeTruthy();
  });
});
