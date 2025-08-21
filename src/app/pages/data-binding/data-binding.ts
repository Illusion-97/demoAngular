import {Component, inject, Input} from '@angular/core';
import {Child} from './child/child';
import {Sync} from './sync/sync';
import {Edit} from './edit/edit';
import {Person, PersonService} from '../../services/person';

@Component({
  selector: 'app-data-binding',
  imports: [
    Child,
    Sync,
    Edit
  ],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  // visibilité nomDeVariable : types = valeurInitiale
  public value: string = 'Hello from DataBinding';
  // dans une classe visibilité par défaut = public
  publicValue: string = 'public'
  // sans affectation, valeur par défaut = undefined
  undefinedValue: undefined;
  // une variable peut avoir plusieurs types, ils sont séparés par un | lors de la déclaration
  optionalValue: string | undefined;
  // nomDeVariable? équivaut à ajouter | undefined aux types définis pour cette variable
  optionalSecondValue? : string;
  // nomDeVariable! indique à TS que la valeur sera FORCEMENT affectée au moment de l'utilisation
  @Input()
  optionalREQUIREDValue! : string;

  service = inject(PersonService);

  childButtonClicked() {
    alert("Child button clicked")
  }

  person: Person = {
    nom: "Connu",
    prenom: "Nain"
  }

  /*
  * Afficher dans data-binding.html les informations de la variable person
  * Editer ces informations dans des inputs dans le composant edit
  * */
}
