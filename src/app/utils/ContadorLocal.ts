import {ContadorAbstract} from './ContadorAbstract'
import {Observable, of} from 'rxjs'

export class ContadorLocal extends ContadorAbstract{
  
constructor(){
  super()
  this.contador = 0;
}

  getContador(): Observable<number>{
    return of(this.contador);
  }
  increment(): void{
    this.contador++
  }
  
  decrement(): void{
    this.contador--;
  }
}
  