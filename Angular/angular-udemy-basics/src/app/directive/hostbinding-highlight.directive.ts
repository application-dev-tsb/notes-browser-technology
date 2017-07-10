import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHostbindingHighlight]'
})
export class HostbindingHighlightDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string = 'black';

  constructor() { }

  @HostListener('mouseenter') mouseEnter() {
    this.backgroundColor = 'green';
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = 'blue';
  }

}
