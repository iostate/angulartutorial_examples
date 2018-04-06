/**
 * Allows for the background-color of a DOM element to be red, and the text to be white.
 *
 * To use, simply add the selector to a DOM element.
 *
 * Example:
 *
 * <p appRedHighlight> Some text </p>
 */

import {Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appRedHighlight]'
})
export class RedHighlightDirective implements OnInit {
  @Input() color: string;
  @Input('appRedHighlight') highlightColor: string = 'red';
  @Input() defaultColor: string = 'transparent';
  @HostBinding('style.backgroundColor') textColor: string = this.highlightColor;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.highlightColor = this.defaultColor;
  }


  @HostListener('mouseenter') mouseover(eventDate: Event) {
    this.textColor = this.highlightColor;
  }

}
