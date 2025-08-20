import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
  // @Input() pour préparer le composant à recevoir une information lors de son appel par un autre
  @Input()
  recievedValue: string = "Hello from child";

  // @Output pour préparer le composant à transmettre une information au composant qui l'appelle
  @Output()
  childClick = new EventEmitter();

  buttonClicked() {
    // la fonction emit d'un EventEmitter déclenche l'évènement en transmettant la valeur fournie en paramètre
    this.childClick.emit();
    alert("Button clicked")
  }
}
