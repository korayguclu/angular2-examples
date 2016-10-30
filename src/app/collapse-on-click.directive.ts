import { Directive,Input,Output,HostListener ,HostBinding} from '@angular/core';

@Directive({
  selector: '[appCollapseOnClick]' 
})
export class CollapseOnClickDirective {

  @Input('collapsed')
  isCollapsed = false;

  constructor() { }

  @HostBinding("class.shake")
  get shake(){
    return this.isCollapsed;
  }

  @HostListener('click')
  toggle(){
    console.log("toggle");
    this.isCollapsed = !this.isCollapsed;
  }

}
