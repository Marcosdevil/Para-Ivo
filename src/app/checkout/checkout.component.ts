import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  

  
  productos: Producto[] = [];
  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {

    this.carritoService.productos.subscribe(data => this.productos = data);
  }
    
  total() {
    let sum = 0;
    this.productos.forEach(producto => {
      sum += producto.quantity * producto.price
    });
    return sum;
  };
  

}
