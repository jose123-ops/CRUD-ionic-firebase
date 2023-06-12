import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ClienteI } from 'src/app/commons/interface/interfaceC';
import { ClienteSService } from 'src/app/services/cliente-s.service';

@Component({
  selector: 'app-editar-c',
  templateUrl: './editar-c.page.html',
  styleUrls: ['./editar-c.page.scss'],
})
export class EditarCPage implements OnInit {
  datos: ClienteI= {
    id:'',
    nombre: '',
    apellido: '',
    direccion: '',
    cedula: '',
    correo: '',
    fecha: ''
  }

  form = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    Direccion: new FormControl('', Validators.required),
    Cedula: new FormControl('', Validators.required),
    Correo: new FormControl('', Validators.required),
    Fecha: new FormControl('', Validators.required),
  });

  constructor( private modalController: ModalController,
              private database:ClienteSService) { }

  ngOnInit() {
    this.form.patchValue(this.datos as any)

  }
  salir(){
    this.modalController.dismiss();
   }



  actualizaC(){

  const path = 'Clientes';
  const id = this.database.getId();
  this.datos.id =id;

   this.database.ActualizarC(this.datos , path, id).then((res)=>{
    console.log(' con exito ->'); 
   
   } );

   
  }


}
