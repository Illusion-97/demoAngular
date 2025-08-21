import {Component, inject} from '@angular/core';
import {Edit} from '../data-binding/edit/edit';
import {Person, PersonService} from '../../services/person';
import {Router} from '@angular/router';

@Component({
  selector: 'app-editor',
  imports: [
    Edit
  ],
  templateUrl: './editor.html',
  styleUrl: './editor.css'
})
export class Editor {
  person: Person = {
    nom: "Connu",
    prenom: "Nain"
  }

  private readonly service = inject(PersonService);
  private readonly router = inject(Router);

  save() {
    this.service.persons.push(this.person)
    this.router.navigate(['/directives']).then(() => {
      alert("Person saved")
    })
  }
}
