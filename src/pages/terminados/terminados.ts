import { Component } from '@angular/core';
import { ListAtoService } from '../../services/listAto.service';
import { Lista } from '../../models';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';
/**
 * Generated class for the TerminadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-terminados',
  templateUrl: 'terminados.html'
})
export class TerminadosPage {

  listas: Lista[];
  constructor( public listAtoService : ListAtoService,
               private navCtrl : NavController,
              ) {
    this.listas = listAtoService.listas; 
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
    this.navCtrl.push( TerminadosPage );
  }

}
