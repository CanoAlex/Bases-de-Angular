
import { Component } from '@angular/core';

 @Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HereoComponent{

     nombre: string = 'IronMan';
     edad : number = 45;


     obtenerNombre() : string{
         return `${ this.nombre} - ${ this.edad}`
     }
}
