import { TestBed } from '@angular/core/testing';

import { TaskActionService } from './task-action.service';

describe('TaskActionService', () => {
  let service: TaskActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
