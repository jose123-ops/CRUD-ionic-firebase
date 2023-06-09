import { Injectable } from '@angular/core';
import{AngularFirestore,AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteSService {

  constructor(private firestore:AngularFirestore) { }
  createDoc(){
    this.firestore.collection('clientes')
  }


  getCollection(){

    console.log('leyendo')

    this.firestore.collection('clientes').get().subscribe((res)=>{
    })
  }
}
