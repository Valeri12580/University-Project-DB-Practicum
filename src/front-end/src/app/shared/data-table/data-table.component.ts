import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CountryService} from '../../core/services/country.service';
import {CityService} from '../../core/services/city.service';
import {ProfessionService} from '../../core/services/profession.service';
import {WorkerService} from '../../core/services/worker.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {


  @Input()
  public tableType: string = '';

  @Input()
  public tableFields: string[] = [];

  @Input()
  public data: any[] = [];

  public objectKeys: string[] = [];

  constructor(private activatedRoute: ActivatedRoute, private countryService: CountryService,
              private cityService: CityService, private professionService: ProfessionService, private workerService: WorkerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.objectKeys = Object.keys(this.data[0]).slice(1);
  }

  deleteRow(id: string): void {
    const serviceName = this.activatedRoute.snapshot.url.toString();
    let response = new Observable();
    if (serviceName === 'countries') {
      response = this.countryService.deleteById(id);
    } else if (serviceName === 'cities') {
      response = this.cityService.deleteById(id);
    } else if (serviceName === 'professions') {
      response = this.professionService.deleteById(id);
    } else if (serviceName === 'workers') {
      response = this.workerService.deleteById(id);
    }


    response.subscribe(e => {
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([`/${serviceName}`]);
      });

    });

  }

}
