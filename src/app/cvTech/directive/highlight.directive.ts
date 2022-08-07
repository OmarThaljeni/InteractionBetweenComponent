import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  numberOfClicks = 0;

  @HostBinding('style.backgroundColor') bg = 'red';
  constructor() { }

  @HostListener('click', ['$event.target'])
  onClick(btn: any) {
    console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
  }
}




