import {Observable} from 'rxjs'

export abstract class ContadorAbstract {
    public contador: number;
    protected contadorType: string; 

    abstract getContador(): Observable<number>;
    
    getContadorType(): string{
      return this.contadorType;
    }

    abstract increment(): void;
    abstract decrement(): void;
  }
  