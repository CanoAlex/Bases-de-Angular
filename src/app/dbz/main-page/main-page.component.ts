import { Component, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent{

  nuevo : Personaje ={
    nombre : '',
    poder: 0
  }

  personajes : Personaje [] = [
    {
      nombre : 'Goku',
      poder : 10000
    },
    {
      nombre : 'Vegeta',
      poder : 7000
    },
    {
      nombre : 'Trunks',
      poder : 30000
    }
  ];

  agregarNuevoPersonaje(personaje : Personaje)
  {
    this.personajes.push(personaje)
  }

  
  // cambiarNombre(event:any)
  // {
  //   console.log(event);
  // }
}
