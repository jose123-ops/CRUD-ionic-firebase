import { Injectable } from '@angular/core';
import { LoadingController, ToastController, PopoverController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class InteraccionService {

  loading:any;

  constructor(public toastController: ToastController,
              public loadingController: LoadingController,
              public PopoverController: PopoverController)
              {

              }

  async presentToast(mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }


  async presentLoading(mensaje:string) {
    this.loading = await this.loadingController.create({
      message:mensaje,
    });
    await this.loading.present();

  }


  async cerrarLoading() {
   await this.loading.dismiss();
  }

  async Cerrarpopover() {
    await this.PopoverController.dismiss();
      }

}



