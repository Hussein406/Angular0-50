import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appLoveEffect]',
})
export class LoveEffectDirective implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  ngOnInit() {}

  @HostListener('dblclick') doubleClick(eventData: Event) {
    // console.log(this.el.nativeElement.offsetTop, this.el.nativeElement.offsetWidth)
    console.log(
      this.el.nativeElement.offsetTop,
      this.el.nativeElement.offsetWidth,
      this.el.nativeElement.offsetLeft,
      this.el.nativeElement.offsetHeight
    );
  }
}
