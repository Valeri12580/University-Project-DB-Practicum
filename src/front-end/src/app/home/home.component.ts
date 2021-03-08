import { Component, OnInit } from '@angular/core';
import {IWorker} from '../worker/IWorker';
import {WorkerService} from '../core/services/worker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public data: IWorker[] = [];

  public tableFields: string[] = ['Име', 'Фамилия', 'Години', 'Телефонен номер', 'Професия', 'Град'];

  constructor(public workerService: WorkerService) {
  }

  ngOnInit(): void {
    this.workerService.getAllAllWorkers().subscribe(e => {

      this.data = e;
    });
  }

}
