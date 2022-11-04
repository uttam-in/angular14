import { Cliente } from "./cliente";
import { DetalleVenta } from "./detalle-venta";

export class Venta {
    codigo: number | undefined;
    descripcion: string | undefined;
    observacion: string | undefined;
    fecha: string | undefined;
    estatus: string | undefined;

    items: DetalleVenta [] = [];
    cliente: Cliente | undefined;
    total: number | undefined;
}
