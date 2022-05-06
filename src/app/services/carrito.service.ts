import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from '../producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private _productos: Producto[] = [];
  private _productosSubjects: BehaviorSubject<Producto[]> = new BehaviorSubject(this._productos);
  public productos: Observable<Producto[]> = this._productosSubjects.asObservable();
  constructor() { }

  addToCart(producto: Producto) {
    let index = this._productos.findIndex(b => b.name == producto.name);
    if(index === -1)
      this._productos.push(producto);     
    else
      this._productos[index].quantity = producto.quantity;
      if(producto.quantity == 0) {
        this._productos.splice(index, 1);
      }
  }
}
