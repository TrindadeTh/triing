import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'
import { ContadorAbstract } from './utils/ContadorAbstract';

@Injectable({
  providedIn: 'root'
})

//Contador Local e individual
export class ContadorService extends ContadorAbstract{  
  
  constructor() {
    super();
    
    //Declarações iniciais das propriedades
    this.contador = 0;
    this.contadorType = 'Local'
   }

   //Obsoleto: Recupera valor do contador
  getContador(): Observable<number>{
    return of(-1);
  }

  //Incrementa valor do contador
  increment(): void {
    this.contador++;
    console.log('Agora pelo local');
  }

  //Decrementa valor do contador
  decrement(): void {
    if(this.contador > 0) {
     this.contador--;
    }
  }
}
