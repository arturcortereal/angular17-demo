import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'new-syntax',
  standalone: true,
  templateUrl: './new-syntax.component.html',
  styleUrls: ['./new-syntax.component.scss'],
  imports: [MatButtonModule],
})
export class NewSyntaxComponent {
  items = signal(['Angular', 'React', 'View']);
  selectedFramework = signal('');

  selectFramework(framework: string) {
    this.selectedFramework.set(framework);
  }
}
