import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfessionFormComponent} from './profession-form.component';
import {IProfession} from '../profession/IProfession';
import {Observable, of} from 'rxjs';
import {ProfessionService} from '../core/services/profession.service';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

describe('ProfessionFormComponent', () => {
  let component: ProfessionFormComponent;
  let fixture: ComponentFixture<ProfessionFormComponent>;



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

    saveProfession(name: string): Observable<any> {
      return of(name);

    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfessionFormComponent],
      imports: [RouterTestingModule, FormsModule],
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
    fixture = TestBed.createComponent(ProfessionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save profession on submit', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigateByUrl');
    component.onSubmit();
    expect(spy.calls.count()).toEqual(1);
  });
});
