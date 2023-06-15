import { Component, Input, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { ClienteI } from 'src/app/commons/interface/interfaceC';
import { EditarCPage } from 'src/app/pages/editar-c/editar-c.page';
import { VerClientePage } from 'src/app/pages/ver-cliente/ver-cliente.page';
import { ClienteSService } from 'src/app/services/cliente-s.service';
import { InteraccionService } from 'src/app/services/interaccion.service';

@Component({
  selector: 'app-pop-info',
  templateUrl: './pop-info.component.html',
  styleUrls: ['./pop-info.component.scss'],
})

export class PopInfoComponent implements OnInit {

  Cerrarpopover(Cerrarpopover: any) {

  }

  PopoverController: any

  @Input() cliente!: ClienteI;

  // datos: ClienteI = {
  //   id: '',
  //   nombre: '',
  //   apellido: '',
  //   direccion: '',
  //   cedula: '',
  //   correo: '',
  //   fecha: ''
  // }



  constructor(private modalController: ModalController,
    private database: ClienteSService,
    private interaccion: InteraccionService,) { }

  ngOnInit() {
    console.log(this.cliente)
  }

  async abrirModalE() {
    const modal = await this.modalController.create({
      component: EditarCPage,
      componentProps: {cliente: this.cliente }

    });
    await modal.present()
  }


  async abrirModalV() {
    const modalv = await this.modalController.create({
      component: VerClientePage,
      componentProps: {cliente: this.cliente }
    })
    await modalv.present()
  }



  public alertButton = [
    {
      text: 'Cancelar',
      role: 'destructive',
      icon: 'trash-outline',
      cssClass: 'rojo',
      data: {
        action: 'Cancelar',
      },
    },

    {
      text: 'ok',
      handler: () => {
        console.log('confirm ok')

        const path = 'Clientes';
        this.database.EliminarC(path, this.cliente.id,).then((res) => {

          this.interaccion.presentToast('Eliminado con exito')
          this.interaccion.Cerrarpopover()
        });
      }

    },
  ]
}

