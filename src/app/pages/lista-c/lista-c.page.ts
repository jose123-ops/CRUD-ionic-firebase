import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, PopoverController } from '@ionic/angular';
import { PopInfoComponent } from 'src/app/componente/pop-info/pop-info.component';
import { AgregarCPage } from '../agregar-c/agregar-c.page';
import { ClienteSService } from 'src/app/services/cliente-s.service';
import { ClienteI } from 'src/app/commons/interface/interfaceC';
import { EditarCPage } from '../editar-c/editar-c.page';

@Component({
  selector: 'app-lista-c',
  templateUrl: './lista-c.page.html',
  styleUrls: ['./lista-c.page.scss'],
})
export class ListaCPage implements OnInit {


VerCliente : ClienteI[]= [];

  miFecha: any;
  


  constructor( public popoverController: PopoverController,
               private modalController: ModalController,
              // private firestore:ClienteSService,
              private database :ClienteSService
              ) {

   }

  ngOnInit() {
   this.getClienteV();
  }

   async mostrarPop(evento: any){

    const popover =await this.popoverController.create({
      component: PopInfoComponent,
      event: evento,
      mode: 'ios',
      // backdropDismiss: false
    });
    return await popover.present();
  }

   async abrirModal(){
   const modal=await this.modalController.create({
      component:AgregarCPage
    });
    await modal.present()
  }

  getClienteV(){
this.database.getCollection<ClienteI>('Clientes').subscribe(res=>{
  console.log('lo que esta escrito',res)
  this.VerCliente = res;
})
  }

}
