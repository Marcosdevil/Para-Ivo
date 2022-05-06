import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { CarritoService } from '../services/carrito.service';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productos: Producto[] = [];
  

  constructor(private productoService: ProductoService, private carritoService: CarritoService) { }

  ngOnInit(): void {

    this.productoService.getProductos().subscribe( productos => this.productos = productos);

  }

  upQuantity(producto: Producto): void {
    if(producto.stock > producto.quantity) {
    producto.quantity++
    this.carritoService.addToCart(producto);
    }
  }

  downQuantity(producto: Producto): void {
    if(producto.quantity > 0) {
    producto.quantity--;
    }
  }

  verifyProductoQuantity(producto: Producto): void {
    if(producto.stock < producto.quantity) {
      alert("No se pueden pedir más productos que los que hay en stock");
      producto.quantity = producto.stock;
    }

    if(producto.quantity < 0) {
      alert("No se pueden pedir menos productos que 0");
      producto.quantity = 0;
    }
  }
}
