import {Component, OnInit} from '@angular/core';
import {WorkerService} from '../core/services/worker.service';
import {IWorker} from './IWorker';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {
  public tableType: string = 'работници';
  public data: IWorker[] = [];


  public tableFields: string[] = ['Име', 'Фамилия', 'Години', 'Телефонен номер', 'Професия', 'Град'];

  constructor(public workerService: WorkerService) {
  }

  ngOnInit(): void {
    this.workerService.getAllWorkers().subscribe(e => {
      this.data = e;
    });
  }

}
