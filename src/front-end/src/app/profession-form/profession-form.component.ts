import {Component, OnInit} from '@angular/core';
import {ProfessionService} from '../core/services/profession.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profession-form',
  templateUrl: './profession-form.component.html',
  styleUrls: ['./profession-form.component.css']
})
export class ProfessionFormComponent implements OnInit {
  public name: string = '';

  constructor(private professionService: ProfessionService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.professionService.saveProfession(this.name).subscribe(e => {

      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/professions']);
      });
    });
  }

}
