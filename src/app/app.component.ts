import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DataService } from './data.service';
import { HciCheckboxesComponent } from './hci-checkboxes/hci-checkboxes.component';
import { MessageComponent } from './message/message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [MessageComponent, HciCheckboxesComponent, CommonModule],
  providers: [DataService],
})
export class AppComponent {
  readonly #dataService = inject(DataService);
  dataFromService = this.#dataService.getData();

  highlightAccessibility = false;
  highlightUsability = false;
  highlightFeedback = false;
  highlightModularity = false;

  onPrincipleChanged(event: { principle: string; isChecked: boolean }) {
    switch (event.principle) {
      case 'accessibility':
        this.highlightAccessibility = event.isChecked;
        break;
      case 'usability':
        this.highlightAccessibility = event.isChecked;
        break;
      case 'feedback':
        this.highlightFeedback = event.isChecked;
        break;
      case 'modularity':
        this.highlightModularity = event.isChecked;
        break;
    }
  }
}
