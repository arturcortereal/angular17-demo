import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeferredComponent } from './deferred/deferred.component';
import { NewSyntaxComponent } from './new-syntax/new-syntax.component';
import { SignalsParentComponent } from './signals/signals-parent/signals-parent.component';
import { TransformComponent } from './transform/transform.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NewSyntaxComponent,
    TransformComponent,
    DeferredComponent,
    SignalsParentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular17';
  selectedComponent: string = '';

  onClick(component: string) {
    this.selectedComponent = component;
  }
}
