import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfessionComponent} from './profession.component';
import {Observable, of} from 'rxjs';
import {IProfession} from './IProfession';
import {ProfessionService} from '../core/services/profession.service';
import {Component} from '@angular/core';

describe('ProfessionComponent', () => {
  let component: ProfessionComponent;
  let fixture: ComponentFixture<ProfessionComponent>;

  @Component({
    selector: 'app-profession-form',
    template: '',
  })
  class ProfessionFormComponentMock {
    public name = '';
  }

  @Component({
    selector: 'app-data-table',
    template: '',
  })
  class AppDataTableMock {
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfessionComponent, AppDataTableMock, ProfessionFormComponentMock],
      providers: [
        {
          provide: ProfessionService,
          useClass: ProfessionServiceMock
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty professions array when component is created', () => {
    expect(component.professions).toBeDefined();
    expect(component.professions.length).toEqual(0);
  });

  it('should have 2 professions array when component\'s  onInit is invoked', () => {
    component.ngOnInit();
    expect(component.professions).toBeDefined();
    expect(component.professions.length).toEqual(2);
  });
});
