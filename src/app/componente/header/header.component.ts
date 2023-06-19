import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InteraccionService } from '../../services/interaccion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input()titulo!: string;

  constructor( private ModalController:ModalController,
              private interacion:InteraccionService ) { }

  ngOnInit() {}


  salir(){
    this.ModalController.dismiss();
    this.interacion.Cerrarpopover()
  }
}
