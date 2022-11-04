/**
 * coder: P Uttam Kumar
 * email: panasalauttam@gmail.com
 */

// Libraries
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

// Components

// Services
import { ClienteService } from 'src/app/services/cliente.service';
import { ProductoService } from 'src/app/services/producto.service';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { VentaService } from 'src/app/services/VentaService';

// Models
import { Product } from 'src/app/models/product';
import { Producto } from 'src/app/models/producto';
import { Cliente } from 'src/app/models/cliente';
import { Status } from 'src/app/models/status';
import { Proveedor } from 'src/app/models/proveedor';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  constructor(
    private clienteService: ClienteService,
    private productoService: ProductoService,
    private ventaService: VentaService,
    private proveedorService:ProveedorService,
    private toastr: ToastrService
  ) { }

  // Form controller
  ventaForm = new FormGroup({
    proovedor: new FormControl(''), // client 
    fecha: new FormControl(''), // sale data
    eStatus: new FormControl('') // payment status
  });

  /**
   * ventaForm submit function
   */
  ventaFormSubmit() {
    let submitPayload = {
      ...this.ventaForm.value,
      products: this.productCartList,
      total: this.totalCostSum
    }
    this.ventaService.createCompra(submitPayload).subscribe(
      (data) => this.resetForm(),
      (error) => this.toastr.error("Error!",(error?.error?.nombre || '')+" stock not sufficient")
    )
  }

  resetForm(){
    this.toastr.success("Success","Compras created!");
    this.ventaForm.reset();
    this.selectedProduct = 0;
    this.quantityProduct = 0;
    this.productCartList = []
    this.totalCostSum = 0
  }

  // Product cart

  productCartList: Product[] = [];

  getDataById(type:any, id:number) {
    if (type === 'product') {
      var result = this.productos.filter(obj => {
        return obj.codigo === id
      })
      return result[0];
    }
    if (type === 'client') {
      var result = this.productos.filter(obj => {
        return obj.codigo === id
      })
      return result[0];
    }
    return new Producto();
  }

  onAddProduct() {
    if (this.selectedProduct && this.quantityProduct) {
      let product = this.getDataById('product', this.selectedProduct);
      this.productCartList.push({
        id: product?.codigo,
        name: product?.nombre,
        quantity: this.quantityProduct,
        itemcost: product?.precioVenta,
        totalCost: this.quantityProduct * product?.precioVenta
      })
      this.selectedProduct = 0;
      this.quantityProduct = 0;
      this.calculateSum();
    }
  }

  calculateSum() {
    this.totalCostSum = this.productCartList.reduce((accumulator, object) => {
      return accumulator + object?.totalCost;
    }, 0);
  }

  /**
   * deletes the product form the cart
   * @param index // index of product to be removed
   */
  onDeleteProduct(index: number) {
    this.productCartList.splice(index, 1);
    this.calculateSum();
  }

  /**
   * @param event // input event
   * @param i // index
   * @param product // product
   */
  onProductEdit(event:any, i:number, product: any) {
    let productPrice = this.getDataById('product', product?.id)?.precioVenta;
    this.productCartList[i].totalCost = parseInt(event.target.value || 0) * productPrice;
    this.calculateSum();
  }

  clientes: Cliente[] = [];
  statusData: Status[] = [{ id: 1, status: "Paid" }, { id: 2, status: "Payment pending" }];
  productos: Producto[] = [];
  proovedors: Proveedor[] = []
  model:any;

  selectedClient: number=0;
  selectedStatus: number|undefined;
  selectedProduct: number|undefined;
  quantityProduct: number=0;
  totalCostSum: number = 0;



  ngOnInit(): void {
    this.loadClients();
    this.loadProducts();
    this.loadProveedors();
  }

  loadClients() {
    this.clienteService.getClientes().subscribe(
      clientData => this.clientes = clientData
    );
  }

  loadProducts() {
    this.productoService.getProductos().subscribe(
      productos => this.productos = productos
    );
  }

  loadProveedors() {
    this.proveedorService.getProveedores().subscribe(
      productos => this.proovedors = productos
    );
  }
}
