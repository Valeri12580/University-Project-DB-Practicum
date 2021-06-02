import {ProfessionService} from './profession.service';
import {IProfession} from '../../profession/IProfession';
import {of} from 'rxjs';

describe('ProfessionService', () => {
  let service: ProfessionService;
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy, delete: jasmine.Spy };


  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'delete']);
    service = new ProfessionService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get professions', () => {
    const professions: IProfession[] = [{name: 'WC Cleaner'}];
    httpClientSpy.get.and.returnValue(of(professions));
    service.getAllProfessions().subscribe(p => expect(p).toEqual(professions));
    expect(httpClientSpy.get.calls.count()).toBe(1);
  });
  it('should save professions', () => {
    httpClientSpy.post.and.returnValue(of());
    const profession = 'Programmer';
    service.saveProfession(profession).subscribe();
    expect(httpClientSpy.post.calls.count()).toBe(1);
  });

  it('should delete proffesion by id', () => {
    httpClientSpy.delete.and.returnValue(of());
    const professionId = 'dasdasdasdas';
    service.deleteById(professionId).subscribe();
    expect(httpClientSpy.delete.calls.count()).toBe(1);
  });
});
