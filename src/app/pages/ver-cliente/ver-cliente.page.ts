import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClienteI } from 'src/app/commons/interface/interfaceC';
import { InteraccionService } from '../../services/interaccion.service';

@Component({
  selector: 'app-ver-cliente',
  templateUrl: './ver-cliente.page.html',
  styleUrls: ['./ver-cliente.page.scss'],
})
export class VerClientePage implements OnInit {

  @Input() cliente!: ClienteI;




  constructor( public ModalController:ModalController,
              public interacion:InteraccionService) { }

  ngOnInit() {
    console.log(this.cliente)
  }


  salir(){
    this.ModalController.dismiss();
    this.interacion.Cerrarpopover()

   }

}
