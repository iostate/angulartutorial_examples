import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
@Input() defaultColor: string = 'transparent';
@Input() highlightColor: string = 'blue';


  /**
   * Used in conjunction with HostListener in order to change the styling of elements.
   * @type {string}
   */
  @HostBinding('style.backgroundColor') backgroundColor: string;


  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  /**
   * Hovering the mouse over the DOM element containing this attribute will cause the background color
   * to be changed to blue
   * @param {Event} eventData
   */
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // Use renderer to implement the styling
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');

    // Uses @HostBinding and @Input to implement styling
    this.backgroundColor = this.highlightColor;
  }

  /**
   * Removing the mosue from the DOM element containing this attribute will cause the background color
   * to be changed to back to transparent
   * @param {Event} eventData
   */
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }
}
