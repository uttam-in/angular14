// Libraries
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

// Components

// Services

import { VentaService } from 'src/app/services/VentaService';

// Models
import { Cliente } from 'src/app/models/cliente';
import { Producto } from 'src/app/models/producto';
import { Status } from 'src/app/models/status';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductoService } from 'src/app/services/producto.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  // Form controller
  ventaForm = new FormGroup({
    cliente: new FormControl(''), // client 
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
    this.ventaService.createVenta(submitPayload).subscribe(
      (data) => this.resetForm(),
      (error) => this.toastr.error("Error!",(error?.error?.nombre || '')+" stock not sufficient")      
    )
  }

  resetForm(){
    this.toastr.success("Success","Ventas created!");
    this.ventaForm.reset();
    this.selectedProduct = 0;
    this.quantityProduct = 0;
    this.productCartList = [];
    this.totalCostSum = 0;
  }

  // Product cart

  productCartList: Product[] = [];

  getDataById(type: string, id: number) {
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
  onProductEdit(event:any, i:any, product:any) {
    let productPrice = this.getDataById('product', product?.id)?.precioVenta;
    this.productCartList[i].totalCost = parseInt(event.target.value || 0) * productPrice;
    this.calculateSum();
  }

  clientes: Cliente[] = [];
  statusData: Status[] = [{ id: 1, status: "Paid" }, { id: 2, status: "Payment pending" }];
  productos: Producto[] = [];
  model: any;

  selectedClient: number | undefined;
  selectedStatus: number | undefined;
  selectedProduct: number | undefined;
  quantityProduct: number = 0;
  totalCostSum: number = 0;

  constructor(
    private clienteService: ClienteService,
    private productoService: ProductoService,
    private ventaService: VentaService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loadClients();
    this.loadProducts();
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

}
