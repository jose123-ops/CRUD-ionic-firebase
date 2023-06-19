import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ClienteI } from 'src/app/commons/interface/interfaceC';
import { ClienteSService } from 'src/app/services/cliente-s.service';
import { InteraccionService } from 'src/app/services/interaccion.service';

@Component({
  selector: 'app-editar-c',
  templateUrl: './editar-c.page.html',
  styleUrls: ['./editar-c.page.scss'],
})
export class EditarCPage implements OnInit {

  @Input() cliente!: ClienteI;



  constructor(private modalController: ModalController,
    private database: ClienteSService,
    private interaccion: InteraccionService) { }

  ngOnInit() {


  }


  actualizaC() {

    this.interaccion.presentLoading('Actualizando....')

    const path = 'Clientes';

    this.database.ActualizarC(this.cliente, path, this.cliente.id).then((res) => {

      this.interaccion.cerrarLoading()
      this.interaccion.presentToast('Actualizado con exito')
      this.modalController.dismiss();
      this.interaccion.Cerrarpopover()




    });


  }


  isDisable = true

  ButtonState(){
  this.isDisable  = !this.isDisable

   }

}
