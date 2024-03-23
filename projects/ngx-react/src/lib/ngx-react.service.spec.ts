import { TestBed } from '@angular/core/testing';

import { NgxReactService } from './ngx-react.service';

describe('NgxReactService', () => {
  let service: NgxReactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxReactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
