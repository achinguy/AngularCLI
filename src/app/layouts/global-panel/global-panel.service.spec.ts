import { TestBed, inject } from '@angular/core/testing';

import { GlobalPanelService } from './global-panel.service';

describe('GlobalPanelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalPanelService]
    });
  });

  it('should be created', inject([GlobalPanelService], (service: GlobalPanelService) => {
    expect(service).toBeTruthy();
  }));
});
