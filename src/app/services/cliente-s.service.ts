import { Injectable } from '@angular/core';
import{AngularFirestore,AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteSService {


  constructor(private firestore:AngularFirestore) { }

// FUNCION PARA CREAR UN CLIENTE
  crearC(data: any, path: string, id: string) {

    const collection = this.firestore.collection(path);
    return collection.doc(id).set(data);
}


getId(){
  return this.firestore.createId();
}

// mostrar datos
  getCollection<tipo>(path: string) {
    const collection = this.firestore.collection<tipo>(path);
    return collection.valueChanges();
  }




  ActualizarC(data: any, path: string, id: string) {
  const collection = this.firestore.collection(path);
  return collection.doc(id).update(data)

  }


  EliminarC(path:string, id: string) {
    const collection = this.firestore.collection(path);
    return collection.doc(id).delete();
}



}



