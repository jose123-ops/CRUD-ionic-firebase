import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, PopoverController, LoadingController } from '@ionic/angular';
import { PopInfoComponent } from 'src/app/componente/pop-info/pop-info.component';
import { AgregarCPage } from '../agregar-c/agregar-c.page';
import { ClienteSService } from 'src/app/services/cliente-s.service';
import { ClienteI } from 'src/app/commons/interface/interfaceC';
import { EditarCPage } from '../editar-c/editar-c.page';
import { InteraccionService } from '../../services/interaccion.service';

@Component({
  selector: 'app-lista-c',
  templateUrl: './lista-c.page.html',
  styleUrls: ['./lista-c.page.scss'],
})
export class ListaCPage implements OnInit {


  VerCliente: ClienteI[] = [];
  miFecha: any;
  BuscarClientes: string= '';



  constructor(public popoverController: PopoverController,
    private modalController: ModalController,
    private database: ClienteSService,
    private InteraccionService:InteraccionService
  ) {

  }

  ngOnInit() {
    this.getClienteV();
    // this.BuscarClientes = this.VerCliente;

  }

  async mostrarPop(evento: any, idCliente: string) {

    const popover = await this.popoverController.create({
      component: PopInfoComponent,
      event: evento,
      mode: 'ios',
      componentProps: { id: idCliente },

    });
    return await popover.present();
  }

  async abrirModal() {
    const modal = await this.modalController.create({
      component: AgregarCPage
    });
    await modal.present()
  }

  getClienteV() {
    this.InteraccionService.presentLoading('Espere por favor')

    this.database.getCollection<ClienteI>('Clientes').subscribe(res => {
      this.VerCliente = res;

    this.InteraccionService.cerrarLoading()
      // this.BuscarClientes = res;
    })

  }

  BuscarCliente(event: any) {
this.BuscarClientes = event.detail.value;







  }

}








    // const Buscar = event.target.value;
    // if (Buscar && Buscar.trim() != '') {
    //   // this.BuscarClientes = structuredClone(this.VerCliente);
    //   this.BuscarClientes = this.BuscarClientes.filter((VerCliente: any) => {
    //     return (VerCliente.nombre.toLowerCase().indexOf(Buscar.toLowerCase()) > -1);
    //   })
    //   console.log(this.BuscarClientes)

    // } else {
    //   this.BuscarClientes = this.VerCliente

    // }


