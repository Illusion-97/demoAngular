import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-sync',
  imports: [FormsModule],
  templateUrl: './sync.html',
  styleUrl: './sync.css'
})
export class Sync {
  @Input()
  innerValue!: string;

  @Output()
  innerValueChange: EventEmitter<string> = new EventEmitter<string>();

  get value() {
    return this.innerValue
  }

  set value(value: string) {
    this.innerValue = value
    this.innerValueChange.emit(this.innerValue)
  }
}
