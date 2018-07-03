import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDrop]'
})


export class DropDirective {

  @HostBinding('class.show') isShow = false;

  @HostListener('click') toggle() {
    this.isShow = !this.isShow;
    const el = document.querySelector('.dropdown-menu')
    if (this.isShow) {
      el.classList.add('show');
    } else {
      el.classList.remove('show');
    }
  }

  constructor() { }

}
