import { Component, Input } from '@angular/core';

function characterNameUppercase(transform: string): string {
  return transform.toUpperCase();
}

@Component({
  standalone: true,
  selector: 'transform',
  template: `<div>{{ name }}</div>`,
})
export class TransformComponent {
  @Input({ required: true, transform: characterNameUppercase })
  name!: string;
}
