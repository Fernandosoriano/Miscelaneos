import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
      Hola mundo... esta es una etiqueta
    </p>
    <button class="btn btn-primary" (click)="tamanioPlus()">
      <i class="fa fa-plus"> </i>
      </button>
      <button class="btn btn-primary" (click)="tamanioMinus()">
      <i class="fa fa-minus"> </i>
      </button>


  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {
tamano: number = 15;
tamanioPlus(){
  this.tamano = this.tamano+5
}
tamanioMinus(){
  this.tamano = this.tamano-5
  if (this.tamano<0.1){
    alert('No puedes disminuir más el tamaño de la letra');

  }
}
  constructor() { }

  ngOnInit(): void {
  }

}
