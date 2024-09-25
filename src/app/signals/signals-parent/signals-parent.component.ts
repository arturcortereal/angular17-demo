import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'signals-parent',
  standalone: true,
  templateUrl: 'signals-parent.component.html',
  styleUrl: 'signals-parent.component.scss',
  imports: [CounterComponent],
})
export class SignalsParentComponent {
  counter = 0;

  onIncrement() {
    this.counter += 1;
  }
}
