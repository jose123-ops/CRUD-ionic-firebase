import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { ClienteI } from 'src/app/commons/interface/interfaceC';
import { ClienteSService } from 'src/app/services/cliente-s.service';
import { InteraccionService } from 'src/app/services/interaccion.service';
import { FormControl, FormGroup, FormsModule, Validators  } from '@angular/forms';

@Component({
  selector: 'app-agregar-c',
  templateUrl: './agregar-c.page.html',
  styleUrls: ['./agregar-c.page.scss'],
})
export class AgregarCPage implements OnInit {

  validacion: any;

  datos: ClienteI= {
    id:'',
    nombre: '',
    apellido: '',
    direccion: '',
    cedula: '',
    correo:'',
    fecha:new Date
  }



  constructor(private ModalController:ModalController,
              private database:ClienteSService,
              private interaccion:InteraccionService,
              private navCtrl:   NavController,
              private alertCtrl: AlertController
         ) {

this.validacion = {};

              }

              ionViewDidLoad(){ }

  ngOnInit() {


  }
crearcliente(){

// this.interaccion.presentLoading('guardando....')

  const path = 'Clientes';
  const id = this.database.getId();
  this.datos.id =id;

  this.database.crearC(this.datos , path, id).then((res)=>{
    console.log(' con exito ->')

    // this.interaccion.cerrarLoading()
    this.interaccion.presentToast('guardado con exito')
    this.ModalController.dismiss();

  })
 }



}
