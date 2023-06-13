import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClienteI } from 'src/app/commons/interface/interfaceC';
import { EditarCPage  } from 'src/app/pages/editar-c/editar-c.page';
import { ListaCPage } from 'src/app/pages/lista-c/lista-c.page';
import { ClienteSService } from 'src/app/services/cliente-s.service';

@Component({
  selector: 'app-pop-info',
  templateUrl: './pop-info.component.html',
  styleUrls: ['./pop-info.component.scss'],
})
export class PopInfoComponent  implements OnInit {
 datos:ClienteI={
  id:'',
  nombre: '',
  apellido: '',
  direccion: '',
  cedula: '',
  correo: '',
  fecha: ''
 }

 

  constructor(private modalController: ModalController,
              private database :ClienteSService,
               private verCliente:ListaCPage) { }

  ngOnInit() {}

  async abrirModalE(){
    const modal=await this.modalController.create({
       component:EditarCPage
     });
     await modal.present()
   }

   EliminarC(){
    const path = 'Clientes';
    const id = this.database.getId();
    this.datos.id =id;
    this.database.EliminarC(this.datos , path, id ).then((res)=>{
    
  })

  }


  
}

