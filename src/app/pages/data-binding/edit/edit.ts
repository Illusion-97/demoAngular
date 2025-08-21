import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Person} from '../../../services/person';

@Component({
  selector: 'app-edit',
  imports: [
    FormsModule
  ],
  templateUrl: './edit.html',
  styleUrl: './edit.css'
})
export class Edit {
  @Input({required: true})
  person!: Person;
  @Output()
  personChange = new EventEmitter<Person>();

  get nom() {
    return this.person.nom
  }
  set nom(value: string) {
    this.person.nom = value
    this.personChange.emit(this.person)
  }
  get prenom() {
    return this.person.prenom
  }
  set prenom(value: string) {
    this.person.prenom = value
    this.personChange.emit(this.person)
  }
}
