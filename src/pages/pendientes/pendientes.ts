import { Component } from '@angular/core';
import { ListAtoService } from '../../services/listAto.service';
import { Lista } from '../../models';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';


@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.html'
})
export class PendientesPage {
  listas: Lista[];
  constructor( public listAtoService : ListAtoService,
               private navCtrl : NavController,
               private alertCtrl : AlertController ) {
    this.listas = listAtoService.listas;
  }

  listaSeleccionada(lista:Lista){
    this.navCtrl.push( AgregarPage,{
      titulo : lista.titulo,
      lista : lista
    }
    )
  }
  agregarLista(){
    const alerta = this.alertCtrl.create({
      title: 'Nueva Lista',
      inputs: [{
        name:'titulo',
        placeholder:'Ingrsa el nombre de la lista...'
      }],
      buttons:[{
        text: 'Cancelar'
      },{
        text: 'Agregar',
        handler: data => {
         if( data.titulo.length === 0) {
           return;
         }
         this.navCtrl.push( AgregarPage , {
           titulo : data.titulo
         });
  }
      }]
    });
    alerta.present();
  }

  eliminarLista( lista : Lista ){
    this.listAtoService.eliminarLista( lista );
    this.navCtrl.push( PendientesPage );
  }
}
