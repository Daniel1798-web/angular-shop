import {Component, Input, Output, EventEmitter} from '@angular/core';
import { productos } from './product.model';

@Component({
selector:'app-product',
templateUrl:'./product.component.html'

})

export class productComponent {

  @Input() productos!: productos;

  @Output() addCart: EventEmitter<any> = new EventEmitter();

  add(){
    console.log("hola")
    this.addCart.emit(this.productos.id)
  }

}