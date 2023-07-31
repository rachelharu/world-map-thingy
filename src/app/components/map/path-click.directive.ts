import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding,
} from '@angular/core';




@Directive({
  selector: 'path',
})

export class PathClickDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click')
  onClick() {
    const clickedElement = this.el.nativeElement;
    this.toggleClass('red');
    const id = this.el.nativeElement.getAttribute('id');
    this.logName(id);
    
  }
 //for CSS color change
  private toggleClass(className: string) {
    const allPathElements = document.querySelectorAll('path');

    allPathElements.forEach((pathElement: SVGPathElement) => {
        if (pathElement !== this.el.nativeElement) {
          pathElement.classList.remove(className);
        }
      });

    const classList = this.el.nativeElement.classList;
    if (classList.contains(className)) {
      classList.remove(className);
    } else {
      classList.add(className);
    }
  }

  logName(id: string) {
    console.log(`Clicked SVG name attribute: ${id}`);
  }
}
