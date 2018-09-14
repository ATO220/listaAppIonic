import { Injectable } from '@angular/core';
import { Lista } from '../models';


@Injectable()
export class ListAtoService {

    listas: Lista[] = [];

    constructor() {
        this.cargarStorage();
    }

    agregarLista( lista : Lista ){
        this.listas.push( lista );
        this.guaradarStorage();
    }

    eliminarLista( lista : Lista ){
        this.listas = this.listas.filter( listasData => {
            return listasData.id !== lista.id
        });

        this.guaradarStorage();
    }

    guaradarStorage(){
        localStorage.setItem('data', JSON.stringify( this.listas ));
    }

    cargarStorage(){
        if( localStorage.getItem( 'data' ) ){
            this.listas = JSON.parse(localStorage.getItem('data'));  
        }else{        
            this.listas = [];
        }
    }
}