import {Directive, Input, ElementRef, Renderer2} from '@angular/core';

/**
 * Generated class for the HideHeaderDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[hide-header]', // Attribute selector,
  host: {
    '(ionScroll)': 'onContentScroll($event)'
  }
})
export class HideHeaderDirective {
  @Input("header") header: HTMLElement;
  headerHeight;

  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log('Hello HideHeaderDirective Directive');
  }

  onContentScroll(event) {
    if (event.scrollTop > 56) {
      this.renderer.setStyle(this.header, "top", "-56px")

    }
    else {
      this.renderer.setStyle(this.header, "top", "0")
    }
  }

  ngOnInit() {
    this.headerHeight = this.header.clientHeight;
    this.renderer.setStyle(this.header, 'webkitTransition', 'top 700ms');
  }
}
