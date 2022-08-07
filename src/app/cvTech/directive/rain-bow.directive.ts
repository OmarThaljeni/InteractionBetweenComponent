import { style } from '@angular/animations';
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainBow]'
})
export class RainBowDirective {

  colorTable = ['gold','gray','lightgray','green','red','blue','coral','lightblue','pink']
    
  

  @HostBinding('style.backgroundColor') bc: any;
  @HostBinding('style.color') color: any;

  constructor() { }

  @HostListener('keypress') changeColor()
  {
    const i = Math.floor(Math.random() * (this.colorTable.length-1))
    let j = Math.floor(Math.random() * (this.colorTable.length-1))

    this.bc = this.colorTable[i];
    this.color = this.colorTable[j];
  }

}
