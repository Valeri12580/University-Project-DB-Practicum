import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HomeService} from '../core/services/home.service';
import {Router} from '@angular/router';
import {IWorker} from '../worker/IWorker';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  cityName: string = '';
  positionName: string = '';
  isPositionSearchActive: boolean = false;
  isCitySearchActive: boolean = false;


  @Output()
  public eventEmitter = new EventEmitter<IWorker[]>();

  constructor(private homeService: HomeService, private router: Router) {
  }

  ngOnInit(): void {
  }

  checkPositionSearch(): void {
    this.isPositionSearchActive = !this.isPositionSearchActive;
  }

  checkCitySearch(): void {
    this.isCitySearchActive = !this.isCitySearchActive;
  }

  submit(): void {
    this.homeService.searchByCriteria(this.positionName, this.cityName)
      .subscribe(e => {
        this.eventEmitter.emit(e);
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['/']);
        });
      });
  }

}
