import { Injectable } from '@angular/core';
import { ContadorAbstract } from './utils/ContadorAbstract';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  contadorAtual: ContadorAbstract // Contador genérico global
  constructor() { }
}
