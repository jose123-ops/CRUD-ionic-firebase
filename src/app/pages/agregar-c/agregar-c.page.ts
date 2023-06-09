import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-c',
  templateUrl: './agregar-c.page.html',
  styleUrls: ['./agregar-c.page.scss'],
})
export class AgregarCPage implements OnInit {

  constructor(private ModalController:ModalController) { }

  ngOnInit() {
  }
 salir(){
  this.ModalController.dismiss();
 }
}
