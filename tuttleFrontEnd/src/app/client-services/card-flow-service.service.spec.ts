import { TestBed, inject } from '@angular/core/testing';

import { CardFlowServiceService } from './card-flow-service.service';

describe('CardFlowServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardFlowServiceService]
    });
  });

  it('should be created', inject([CardFlowServiceService], (service: CardFlowServiceService) => {
    expect(service).toBeTruthy();
  }));
});
