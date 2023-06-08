import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { PopInfoComponent } from 'src/app/componente/pop-info/pop-info.component';

@Component({
  selector: 'app-lista-c',
  templateUrl: './lista-c.page.html',
  styleUrls: ['./lista-c.page.scss'],
})
export class ListaCPage implements OnInit {

  miFecha: any;


  constructor( public popoverController: PopoverController) {

   }

  ngOnInit() {
  }

   async mostrarPop(evento: any){

    const popover =await this.popoverController.create({
      component: PopInfoComponent,
      event: evento,
      mode: 'ios',
      backdropDismiss: false
    });
    return await popover.present();
  }



}
