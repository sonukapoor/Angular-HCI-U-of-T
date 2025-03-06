import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightOnFocusDirective } from './highlight-on-focus.directive';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css',
  imports: [FormsModule, CommonModule, HighlightOnFocusDirective],
})
export class MessageComponent {
  message: string = 'Hello, Angular!';

  updateMessage(): void {
    this.message = 'You clicked the button!';
  }
}
