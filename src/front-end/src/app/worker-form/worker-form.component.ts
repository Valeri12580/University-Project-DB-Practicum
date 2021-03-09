import {Component, OnInit} from '@angular/core';
import {WorkerService} from '../core/services/worker.service';
import {ProfessionService} from '../core/services/profession.service';
import {CityService} from '../core/services/city.service';
import {IWorkerAdd} from './IWorkerAdd';
import {Router} from '@angular/router';

@Component({
  selector: 'app-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.css']
})
export class WorkerFormComponent implements OnInit {
  public worker: IWorkerAdd = new IWorkerAdd();
  public professions: string[] = [];
  public cities: string[] = [];


  constructor(private workerService: WorkerService, private professionService: ProfessionService, private cityService: CityService,
              public router: Router) {
  }

  ngOnInit(): void {
    this.professionService.getAllProfessions().subscribe(e => {
      this.professions = e.map(p => p.name);
    });

    this.cityService.getAllCities().subscribe(e => {
      this.cities = e.map(c => c.name);
    });
  }

  onSubmit(): void {
    this.workerService.saveWorker(this.worker).subscribe(e => {
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/workers']);
      });
    });
  }

}
