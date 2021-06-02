import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {Observable, of} from 'rxjs';
import {IWorker} from '../worker/IWorker';
import {WorkerService} from '../core/services/worker.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

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
      declarations: [HomeComponent],
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
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('data should be empty on component creation', () => {
    expect(component.data).toBeDefined();
    expect(component.data.length).toBe(0);
  });

  it('data should be loaded after onInit', () => {
    expect(component.data.length).toBe(0);
    component.ngOnInit();
    expect(component.data).toBeDefined();
    expect(component.data.length).toBe(1);
  });
});
