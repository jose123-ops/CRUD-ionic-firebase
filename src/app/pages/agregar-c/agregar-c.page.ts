import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClienteI } from 'src/app/commons/interface/interfaceC';
import { ClienteSService } from 'src/app/services/cliente-s.service';
import { InteraccionService } from 'src/app/services/interaccion.service';

@Component({
  selector: 'app-agregar-c',
  templateUrl: './agregar-c.page.html',
  styleUrls: ['./agregar-c.page.scss'],
})
export class AgregarCPage implements OnInit {

  datos: ClienteI= {
    id:'',
    nombre: '',
    apellido: '',
    direccion: '',
    cedula: '',
    correo: '',
    fecha: ''
  }
  

  constructor(private ModalController:ModalController,
              private database:ClienteSService,
              private interaccion:InteraccionService) { }

  ngOnInit() {

    
  }
 salir(){
  this.ModalController.dismiss();
 }

crearcliente(){

this.interaccion.presentLoading('guardando....')

  const path = 'Clientes';
  const id = this.database.getId();
  this.datos.id =id;
   
  this.database.crearC(this.datos , path, id).then((res)=>{
    console.log('guardado con exito ->'); 
    this.interaccion.cerrarLoading()
    this.interaccion.presentToast('guardado con exito')
  })

 }

}
