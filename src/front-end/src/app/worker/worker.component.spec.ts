import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WorkerComponent} from './worker.component';
import {IWorker} from './IWorker';
import {Observable, of} from 'rxjs';
import {WorkerService} from '../core/services/worker.service';

describe('WorkerComponent', () => {
  let component: WorkerComponent;
  let fixture: ComponentFixture<WorkerComponent>;

  class WorkerServiceMock {
    private workers: IWorker[] = [
      {
        id: 'dsadadsadsd',
        firstName: 'Valeri',
        lastName: 'Stoyanov',
        age: 15,
        cityName: 'Plovdiv',
        phoneNumber: '0877160332',
        professionName: 'Programmer'
      }
    ];

    getAllWorkers(): Observable<IWorker[]> {
      return of(this.workers);
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkerComponent],
      providers: [
        {
          provide: WorkerService,
          useClass: WorkerServiceMock
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('data should be empty on component creation', () => {
    expect(component.data).toBeDefined();
    expect(component.data.length).toBe(0);
  });

  it('data should be empty on component creation', () => {
    expect(component.data.length).toBe(0);
    component.ngOnInit();
    expect(component.data).toBeDefined();
    expect(component.data.length).toBe(1);
  });
});
