import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from '../../../../models/cliente';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  @Input() dataToTakeAsInput: any;

  public cliente: Cliente = new Cliente();
  public titulo:string = "Crear Cliente";

  constructor(private clienteService: ClienteService,
    private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCliente();
  }

  cargarCliente(): void{
    this.activatedRoute.params.subscribe(params => {
      let codigo = params['codigo']
      if(codigo){
        this.clienteService.getCliente(codigo).subscribe(((cliente:any) => this.cliente = cliente)
        )
      }
    }

    )
  }

  create(): void{
    this.clienteService.create(this.cliente)
    .subscribe((cliente:any) => {
        this.router.navigate(['/clientes'])
      }
    );
  }

  update():void{
    this.clienteService.update(this.cliente)
    .subscribe((cliente:any) =>{
        this.router.navigate(['/clientes'])
    })
  }

}
