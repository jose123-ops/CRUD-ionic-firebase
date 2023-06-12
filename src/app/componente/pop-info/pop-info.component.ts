import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditarCPage } from 'src/app/pages/editar-c/editar-c.page';

@Component({
  selector: 'app-pop-info',
  templateUrl: './pop-info.component.html',
  styleUrls: ['./pop-info.component.scss'],
})
export class PopInfoComponent  implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async abrirModalE(){
    const modal=await this.modalController.create({
       component:EditarCPage
     });
     await modal.present()
   }


}
