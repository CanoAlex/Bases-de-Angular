import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HereoComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //Componentes que contenga este modulo,es un arreglo
    declarations : [
        HereoComponent,
        ListadoComponent
    ],
    //Componentes, servicios,etc, que van hacer visibles fuera
    exports : [
        ListadoComponent
    ],
    imports : [
        CommonModule
    ],
})

export class HeroesModule{}