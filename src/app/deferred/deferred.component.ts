import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  selector: 'deferred',
  standalone: true,
  templateUrl: './deferred.component.html',
  imports: [MatProgressSpinnerModule, MatButtonModule],
  styleUrls: ['./deferred.component.scss'],
})
export class DeferredComponent {
  shouldLoadComponent: boolean = false;
}
