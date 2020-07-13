import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'
import { ContadorAbstract } from './utils/ContadorAbstract';

@Injectable({
  providedIn: 'root'
})

export class ContadorService extends ContadorAbstract{  
  
  constructor() {
    super();
    this.contador = 0;
    this.contadorType = 'Local'
   }

  getContador(): Observable<number>{
    return of(-1);
  }

  increment(): void {
    this.contador++;
    console.log('Agora pelo local');
  }

  decrement(): void {
    if(this.contador > 0) {
     this.contador--;
    }
  }
}
