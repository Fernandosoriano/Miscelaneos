import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private router:ActivatedRoute) { 
    this.router.parent.params.subscribe( parametros => {  //se agrego el parent, para indicar que los parametros biene del componente padre
      console.log("Ruta Hija Usuario nuevo");
      console.log(parametros);

    }

    )
  }

  ngOnInit(): void {
  }

}
