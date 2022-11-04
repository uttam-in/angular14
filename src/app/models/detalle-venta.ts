import { Producto } from "./producto";

export class DetalleVenta {

    producto:Producto | undefined;
    cantidad:number = 1;
    importe: number | undefined;
}
