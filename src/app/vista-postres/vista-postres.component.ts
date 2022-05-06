import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-vista-postres',
  templateUrl: './vista-postres.component.html',
  styleUrls: ['./vista-postres.component.css']
})
export class VistaPostresComponent implements OnInit {

  productos: Producto[] = [
    {
      name: "Bombones",
      price: 1000,
      stock: 50,
      image: "../assets/Images/bombones.jpg",
      category: "postres",
      quantity: 0,
    },
    {
      name: "Almendrado",
      price: 550,
      stock: 50,
      image: "../assets/Images/almendrado.jpg",
      category: "postres",
      quantity: 0,
    },
    {
      name: "Helado",
      price: 500,
      stock: 50,
      image: "../assets/Images/helado.jpg",
      category: "postres",
      quantity: 0,
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
