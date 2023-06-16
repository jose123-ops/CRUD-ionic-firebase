import { Data } from "@angular/router";

export interface ClienteI{
    id:string;
    nombre: string;
    apellido: string;
    direccion: string;
    cedula:string;
    correo:string;
    fecha: Date;
}
