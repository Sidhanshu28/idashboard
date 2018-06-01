import { TestBed, inject } from '@angular/core/testing';

import { DashboardMenusService } from './dashboard-menus.service';

describe('DashboardMenusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardMenusService]
    });
  });

  it('should be created', inject([DashboardMenusService], (service: DashboardMenusService) => {
    expect(service).toBeTruthy();
  }));
});
