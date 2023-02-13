import { TestBed } from '@angular/core/testing';

import { TasksSnapshotService } from './tasks-snapshot.service';

describe('TasksSnapshotService', () => {
  let service: TasksSnapshotService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: TasksSnapshotService, useValue: {} }]
    });
    service = TestBed.inject(TasksSnapshotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
