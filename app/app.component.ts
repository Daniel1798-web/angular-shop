import { Component } from '@angular/core';

import {productos} from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyect';
  textoEntrada: string = "";
  valores : Array <string> = [];
  valores2:Array <string> = [];
  cajita: boolean = false;
  
  agregar()
  {
    this.valores.push(this.textoEntrada)
    
    this.textoEntrada ="";
  }

  borrar(index: number)
  {
    
    if(this.cajita = true)
    {
      this.valores.splice(index , 1)
      
    }

  }
  
  borrar2(index: number)
  {
    this.valores2.splice(index , 1)
  }
  agregar2()
  {
    this.valores2.push(this.textoEntrada)
    this.textoEntrada="";
  }

  

  productos:   productos[]= [
    {
      id: '1',
      image: 'assets/imagenes/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/imagenes/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/imagenes/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/imagenes/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/imagenes/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/imagenes/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ];

  clickProduct(id : number)
  {
    console.log("product")
    console.log(id)
  }
  
  clickCheck(id : number)
  {
    console.log(id)
    console.log("hola")
  }

  
}
