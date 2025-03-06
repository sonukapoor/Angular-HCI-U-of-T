import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
})
export class HighlightOnFocusDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('focus') onFocus() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      '#e0f7fa'
    ); // Light blue on focus
  }

  @HostListener('blur') onBlur() {
    this.renderer.removeStyle(this.el.nativeElement, 'background-color'); // Remove background color on blur
  }
}
