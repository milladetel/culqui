import { Component, OnInit } from '@angular/core';
declare var Culqi: any;  // Declaración de Culqi

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    Culqi.publicKey = 'pk_test_2ddc2025d4c90b94'; // Reemplaza con tu clave pública de prueba
    Culqi.init();
  }
  showCulqiCheckout() {
    Culqi.settings({
      title: 'Culqi Store',
      currency: 'PEN',
      amount: 1000,
      order: 'ord_live_0CjjdWhFpEAZlxlz',
    });
    Culqi.open();
  }
  
  handleCulqiResponse() {
    if (Culqi.token) {
      const token = Culqi.token.id;
      console.log('Token creado:', token);
      // Envia el token a tu backend con Ajax
    } else if (Culqi.order) {
      const order = Culqi.order;
      console.log('Objeto Order creado:', order);
    } else {
      console.log('Error:', Culqi.error);
    }}

  title = 'culqui';
}
