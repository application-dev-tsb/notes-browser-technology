import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHostbindingHighlight]'
})
export class HostbindingHighlightDirective implements OnInit {

  @Input() highlightColor = 'pink';
  @Input() defaultColor = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string; 

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
  }

}
