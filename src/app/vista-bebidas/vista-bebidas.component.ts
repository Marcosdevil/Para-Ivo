import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-vista-bebidas',
  templateUrl: './vista-bebidas.component.html',
  styleUrls: ['./vista-bebidas.component.css']
})
export class VistaBebidasComponent implements OnInit {

  productos: Producto[] = [
    {
      name: "Agua mineral",
      price: 100,
      stock: 50,
      image: "../assets/Images/agua.jpg",
      category: "bebidas",
      quantity: 0,
    },
    {
      name: "Gaseosas línea Pepsi",
      price: 150,
      stock: 50,
      image: "../assets/Images/gaseosa.jpg",
      category: "bebidas",
      quantity: 0,
    },
    {
      name: "Cerveza",
      price: 500,
      stock: 50,
      image: "../assets/Images/cerveza.jpg",
      category: "bebidas",
      quantity: 0,
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
