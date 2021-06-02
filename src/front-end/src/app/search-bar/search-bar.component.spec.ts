import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchBarComponent} from './search-bar.component';
import {Observable, of} from 'rxjs';
import {IWorker} from '../worker/IWorker';
import {HomeService} from '../core/services/home.service';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  class HomeServiceMock {
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

    searchByCriteria(professionCriteria: string, cityCriteria: string): Observable<IWorker[]> {
      return of(this.workers);
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      imports: [RouterTestingModule, FormsModule],
      providers: [
        {
          provide: HomeService,
          useClass: HomeServiceMock
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search and emit', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigateByUrl');
    const spyEmitter = spyOn(component.eventEmitter, 'emit');
    component.submit();
    expect(spy.calls.count()).toEqual(1);
    expect(spyEmitter.calls.count()).toEqual(1);
  });

});
