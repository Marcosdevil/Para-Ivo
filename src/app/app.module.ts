import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { VistaBebidasComponent } from './vista-bebidas/vista-bebidas.component';
import { VistaPizzasComponent } from './vista-pizzas/vista-pizzas.component';
import { VistaEmpanadasComponent } from './vista-empanadas/vista-empanadas.component';
import { VistaPostresComponent } from './vista-postres/vista-postres.component';
import { CarritoComponent } from './carrito/carrito.component';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';


const appRoutes: Routes=[

  {path:'', component: CategoriesComponent},
  {path:'Pizzas', component: VistaPizzasComponent},
  {path:'Empanadas', component: VistaEmpanadasComponent},
  {path:'Bebidas', component: VistaBebidasComponent},
  {path:'Postres', component: VistaPostresComponent},
  {path:'Carrito', component: CarritoComponent},
  {path:'**', component: CategoriesComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    CategoriesComponent,
    VistaBebidasComponent,
    VistaPizzasComponent,
    VistaEmpanadasComponent,
    VistaPostresComponent,
    CarritoComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
