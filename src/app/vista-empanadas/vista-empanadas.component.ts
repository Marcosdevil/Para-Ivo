import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-vista-empanadas',
  templateUrl: './vista-empanadas.component.html',
  styleUrls: ['./vista-empanadas.component.css']
})
export class VistaEmpanadasComponent implements OnInit {

  productos: Producto[] = [
    {
      name: "Carne",
      price: 100,
      stock: 50,
      image: "../assets/Images/empanada_carne.jpg",
      category: "empanadas",
      quantity: 0,
    },
    {
      name: "Atún",
      price: 150,
      stock: 50,
      image: "../assets/Images/empanada_atun.jpg",
      category: "empanadas",
      quantity: 0,
    },
    {
      name: "jamon y queso",
      price: 500,
      stock: 50,
      image: "../assets/Images/empanada_jamonyqueso.jpg",
      category: "empanadas",
      quantity: 0,
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
