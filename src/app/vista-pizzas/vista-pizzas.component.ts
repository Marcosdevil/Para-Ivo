import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-vista-pizzas',
  templateUrl: './vista-pizzas.component.html',
  styleUrls: ['./vista-pizzas.component.css']
})
export class VistaPizzasComponent implements OnInit {

  productos: Producto[] = [
    {
      name: "Muzzarella",
      price: 1000,
      stock: 50,
      image: "../assets/Images/muzzarella.jpg",
      category: "Pizzas",
      quantity: 0,
    },
    {
      name: "Jamón y morrón",
      price: 1500,
      stock: 50,
      image: "../assets/Images/jamonymorron.jpg",
      category: "Pizzas",
      quantity: 0,
    },
    {
      name: "Napolitana",
      price: 2500,
      stock: 50,
      image: "../assets/Images/napolitana.jpg",
      category: "Pizzas",
      quantity: 0,
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
