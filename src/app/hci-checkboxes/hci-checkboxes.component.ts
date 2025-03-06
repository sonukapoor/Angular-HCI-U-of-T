import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hci-checkboxes',
  templateUrl: './hci-checkboxes.component.html',
  styleUrls: ['./hci-checkboxes.component.css'],
})
export class HciCheckboxesComponent {
  @Output() hciPrincipleChanged = new EventEmitter<{
    principle: string;
    isChecked: boolean;
  }>();

  onCheckboxChange(principle: string, event: any): void {
    this.hciPrincipleChanged.emit({
      principle,
      isChecked: event.target.checked,
    });
  }
}
