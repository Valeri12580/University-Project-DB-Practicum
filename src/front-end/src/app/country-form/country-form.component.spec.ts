import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CountryFormComponent} from './country-form.component';
import {CountryService} from '../core/services/country.service';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {AddCountry} from './AddCountry';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';

describe('CountryFormComponent', () => {
  let component: CountryFormComponent;
  let fixture: ComponentFixture<CountryFormComponent>;

  class CountryServiceMock {
    saveCountry(entity: AddCountry): Observable<any> {
      return of(entity);
    }
    updateCountry(entity: AddCountry): Observable<any> {
      return of(entity);
    }
  }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryFormComponent],
      imports: [RouterTestingModule, FormsModule],
      providers: [
        {
          provide: CountryService,
          useClass: CountryServiceMock
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save country on submit', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigateByUrl').and.callThrough();
    component.onSubmit();
    expect(spy.calls.count()).toEqual(1);
  });

  it('should update country on submit', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigateByUrl').and.callThrough();
    component.onSubmit();
    expect(spy.calls.count()).toEqual(1);
  });
});
