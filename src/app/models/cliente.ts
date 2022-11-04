import { Venta } from "./venta";

export class Cliente {
    codigo: number | undefined;
    nombreNegocio: string | undefined;
    telefonoNegocio: string | undefined;
    nombreDueno: string | undefined;
    telefonoDueno: string | undefined;
    nombreEncargado: string | undefined;
    telefonoEncargado: string | undefined;
    direccion: string | undefined;
    nombreFacturacion: string | undefined;
    nitFacturacion: string | undefined;
    empresaTransporte: string | undefined;
    email:string | undefined;

    facturas: Venta[] = [];
}