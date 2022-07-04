import { TestBed } from '@angular/core/testing';

import { OnlineUserService } from './online-user.service';

describe('OnlineUserService', () => {
  let service: OnlineUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
