import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productList: {name: string, price: number}[] = [
    { name: 'Arroz', price: 2000 },
    { name: 'Aceite', price: 5000 },
    { name: 'Sal', price: 1000 },
    { name: 'Azúcar', price: 3000 },
    { name: 'Café', price: 4000 },
    { name: 'Leche', price: 2500 },
    { name: 'Huevos', price: 3500 },
    { name: 'Pan', price: 1500 },
    { name: 'Pasta', price: 2000 },
    { name: 'Salsa de tomate', price: 3000 }
  ];
}
