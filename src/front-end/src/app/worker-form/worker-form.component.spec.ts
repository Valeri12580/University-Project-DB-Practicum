import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WorkerFormComponent} from './worker-form.component';
import {IWorker} from '../worker/IWorker';
import {Observable, of} from 'rxjs';
import {WorkerService} from '../core/services/worker.service';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {IProfession} from '../profession/IProfession';
import {ICity} from '../city/ICity';
import {CityService} from '../core/services/city.service';
import {ProfessionService} from '../core/services/profession.service';

describe('WorkerFormComponent', () => {
  let component: WorkerFormComponent;
  let fixture: ComponentFixture<WorkerFormComponent>;

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

  class ProfessionServiceMock {
    private professions: IProfession[] = [{
      name: 'WC Cleaner',
    },
      {
        name: 'Kravar'
      }
    ];

    getAllProfessions(): Observable<IProfession  []> {
      return of(this.professions);
    }
  }

  class CityServiceMock {
    private cities: ICity[] = [
      {
        name: 'Plovdiv',
        countryName: 'Bulgaria'
      }
    ];

    getAllCities(): Observable<ICity[]> {
      return of(this.cities);
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkerFormComponent],
      providers: [
        {
          provide: WorkerService,
          useClass: WorkerServiceMock
        },
        {
          provide: CityService,
          useClass: CityServiceMock
        },
        {
          provide: ProfessionService,
          useClass: ProfessionServiceMock
        }
      ],
      imports: [RouterTestingModule, FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
