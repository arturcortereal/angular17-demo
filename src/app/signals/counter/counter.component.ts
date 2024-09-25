import { Component, computed, effect, input } from '@angular/core';

@Component({
  selector: 'counter',
  standalone: true,
  templateUrl: 'counter.component.html',
})
export class CounterComponent  {
  value = input.required<number>();
  counterString = computed(() => 'The counter is  ' + this.value());
  constructor() {
    effect(() => {
      console.log(`New value: ${this.value()}`);
    });
  }

}
