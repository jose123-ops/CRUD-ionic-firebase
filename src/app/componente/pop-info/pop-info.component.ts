import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditarCPage } from 'src/app/pages/editar-c/editar-c.page';
import { ClienteSService } from 'src/app/services/cliente-s.service';

@Component({
  selector: 'app-pop-info',
  templateUrl: './pop-info.component.html',
  styleUrls: ['./pop-info.component.scss'],
})
export class PopInfoComponent  implements OnInit {

  constructor(private modalController: ModalController,
              private database :ClienteSService) { }

  ngOnInit() {}

  async abrirModalE(){
    const modal=await this.modalController.create({
       component:EditarCPage
     });
     await modal.present()
   }



  }



