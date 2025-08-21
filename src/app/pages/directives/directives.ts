import { Component } from '@angular/core';
import { PersonService } from '../../services/person';

@Component({
  selector: 'app-directives',
  imports: [],
  templateUrl: './directives.html',
  styleUrl: './directives.css'
})
export class Directives {
  constructor(public service: PersonService) {
  }
}
