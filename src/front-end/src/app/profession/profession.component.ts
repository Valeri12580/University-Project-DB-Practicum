import {Component, OnInit} from '@angular/core';
import {ProfessionService} from '../core/services/profession.service';
import {IProfession} from './IProfession';

@Component({
  selector: 'app-profession',
  templateUrl: './profession.component.html',
  styleUrls: ['./profession.component.css']
})
export class ProfessionComponent implements OnInit {

  public tableFields: string[] = ['Име на професия'];
  public professions: IProfession[] = [];

  constructor(public professionService: ProfessionService) {
    professionService.getAllProfessions().subscribe(e => {
      this.professions = e;
    });
  }

  ngOnInit(): void {


  }

}
