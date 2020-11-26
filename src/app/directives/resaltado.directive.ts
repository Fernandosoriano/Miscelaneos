import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el:ElementRef) { //afectara a todo el eelemento al que le pongas esta directiva como atributo
    console.log("Directiva llamada");
    // el.nativeElement.style.backgroundColor = "yellow";
  }
  @Input("appResaltado") nuevoColor:string;
  @HostListener('mouseenter') mouseEntro(){
    // console.log(this.nuevoColor);
    this.resaltar(this.nuevoColor || 'red');
    // this.el.nativeElement.style.backgroundColor = "yellow";
  }
  @HostListener('mouseleave') mouseSalio(){
    // this.el.nativeElement.style.backgroundColor = null;
    this.resaltar(null);

  }
  private resaltar(color:string){
    this.el.nativeElement.style.backgroundColor = color;

  }

}
