import { Component, OnInit } from '@angular/core';
declare var Culqi: any;  // Declaración de Culqi

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit() {
    // Configuración del Culqi Checkout
    Culqi.settings({
      title: 'Culqi Store',
      currency: 'PEN',
      amount: 1000,
      order: 'ord_live_0CjjdWhFpEAZlxlz',
      xculqirsaid: 'sk_test_CMpSxOHvI9bflFg4',
      rsapublickey: 'pk_test_dd774be9fa317add',
    });

    // Configuración de opciones del Culqi Checkout
    Culqi.options({
      lang: 'auto',
      installments: false,
      paymentMethods: {
        tarjeta: true,
        yape: true,
        bancaMovil: true,
        agente: true,
        billetera: true,
        cuotealo: true,
      },
      style: {
        logo: 'https://culqi.com/LogoCulqi.png',
        bannerColor: '#9BB613',
        buttonBackground: '#9BB613',
        menuColor: '#9BB613',
        linksColor: '#9BB613',
        buttonText: 'Pagar',
        buttonTextColor: '#9BB613',
        priceColor: '#9BB613',
      },
    });
  }

  // Función para mostrar el Culqi Checkout
  showCulqiCheckout() {
    Culqi.open();
  }

  // Función para manejar el token o el objeto order después del pago
  handleCulqiResponse() {
    if (Culqi.token) {
      const token = Culqi.token.id;
      console.log('Se ha creado un Token: ', token);
      // Envia el token a tu backend con Ajax
    } else if (Culqi.order) {
      const order = Culqi.order;
      console.log('Se ha creado el objeto Order: ', order);
    } else {
      console.log('Error : ', Culqi.error);
    }
  }
  title = 'culqui';
}
