import { Component, Input } from '@angular/core';
import { ListAtoService } from '../services/listAto.service';
import { NavController, List, AlertController, ItemSliding } from 'ionic-angular';
import { Lista } from '../models';
import { AgregarPage } from '../pages/agregar/agregar.component';
import { PendientesPage } from '../pages/pendientes/pendientes';
import { TerminadosPage } from '../pages/terminados/terminados';


@Component({
    selector: 'app-listas',
    templateUrl: 'listas.component.html',
})
export class ListasComponent {

    @Input() terminada : boolean = false;

    constructor( public listAtoService : ListAtoService,
                 private navCtrl : NavController,
                 private alertCtrl : AlertController) { 

    }

    listaSeleccionada(lista:Lista){
        this.navCtrl.push( AgregarPage,{
          titulo : lista.titulo,
          lista : lista
        }
        )
      }

    eliminarLista( lista : Lista ){
    this.listAtoService.eliminarLista( lista );
    this.navCtrl.push( PendientesPage );
    }

    editarLista( lista: Lista, slidingItem: ItemSliding){
        
        slidingItem.close();

        const alerta = this.alertCtrl.create({
          title: 'Editar nombre',
          inputs: [{
            name:'titulo',
            placeholder:'Ingrsa el nombre de la lista...',
            value: lista.titulo
          }],
          buttons:[{
            text: 'Cancelar'
          },{
            text: 'Guardar',
            handler: data => {
             if( data.titulo.length === 0) {
               return;
             }
             lista.titulo = data.titulo;
             this.listAtoService.guaradarStorage();
      }
          }]
        });
        alerta.present();
      }
    
}
