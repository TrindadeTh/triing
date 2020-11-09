import { Injectable } from '@angular/core';
import { ContadorAbstract } from './utils/ContadorAbstract';
import { Observable, of, Subscription } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

//Contador Via Firebase (para ser compartilhado)
export class ContadorFirebaseService extends ContadorAbstract {
  database: AngularFireDatabase; // Referencia ao banco de dados
  index: string = ''; // chave no firebase
  subscribed: Subscription; //variavel para recuperação de referencia
  subscribedTemp: Subscription; // Auxiliar


  constructor(db: AngularFireDatabase) { 
    super()

    //Configuração Inicial
    this.contador = 0;
    this.contadorType = 'Firebase'
    //this.item = 
    
    this.database = db;

    this.updateIndex(this.index); // Atualiza referencia
    
  }

  
  

  updateIndex(newIndex: string): void {
    if(newIndex === ''){
      return; // Caso index seja vazio, apenas retorne
    }

    //Subscreve na nova chave
    this.subscribedTemp = this.database.object(newIndex).valueChanges().subscribe((value) => {
      console.log(value);
      if(value === null) {  // Se o valor for vazio (chave inexistente)
        console.log('Invalid Value');   
        this.subscribedTemp.unsubscribe();  // Cancela callback de modificçaão
        this.subscribedTemp = this.subscribed;  // Pra não gerar erro
      }else { // Caso seja um contador valido
        this.contador = value as number;  //pega valor do contador
        if(this.subscribed !== this.subscribedTemp) {
          this.subscribed.unsubscribe(); // Remove callback antigo
          this.subscribed = this.subscribedTemp; // renova a refencia para o callback novo
          this.index = newIndex; // Altera index
        }
      } 
    });
  }

  //Criar nova chave no firebase
  createIndex(): string {
    const itemsRef = this.database.list('/');
    var key = itemsRef.push( 0 ).key; // Cria nova chave com valor 0
    this.updateIndex(key) // Atualiza referencia
    return key;
  }

   //Obsoleto: Recupera valor do contador
  getContador(): Observable<number>{
    return of(1);
  }

  //Incrementa contador remoto
  increment(): void{
    this.database.object(this.index).set(++this.contador);
  }

  //decrementa contador remoto
  decrement(): void {
    this.database.object(this.index).set(--this.contador);
  }
}
