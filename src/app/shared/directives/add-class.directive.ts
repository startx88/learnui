import { Input, OnInit } from '@angular/core';
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAddClass]',
})
export class AddClassDirective implements OnInit {
  @Input('appAddClass') className: string;
  constructor(private _el: ElementRef, private _renderer: Renderer2) {}

  ngOnInit() {
    this._renderer.addClass(this._el.nativeElement.children[0], this.className);
  }
}
