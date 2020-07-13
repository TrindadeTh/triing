import { Injectable } from '@angular/core';
import { ContadorAbstract } from './utils/ContadorAbstract';
import { Observable, of, Subscription } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ContadorFirebaseService extends ContadorAbstract {
  database: AngularFireDatabase;
  index: string = '';
  subscribed: Subscription;
  subscribedTemp: Subscription;


  constructor(db: AngularFireDatabase) { 
    super()
    this.contador = 0;
    this.contadorType = 'Firebase'
    //this.item = 
    
    this.database = db;

    this.updateIndex(this.index);
    
  }

  
  

  updateIndex(newIndex: string): void {
    if(newIndex === ''){
      return;
    }
    this.subscribedTemp = this.database.object(newIndex).valueChanges().subscribe((value) => {
      console.log(value);
      if(value === null) {
        console.log('Invalid Value');   
        this.subscribedTemp.unsubscribe(); 
        this.subscribedTemp = this.subscribed;    
      }else {
        this.contador = value as number;
        if(this.subscribed !== this.subscribedTemp){
        this.subscribed.unsubscribe();
        this.subscribed = this.subscribedTemp;
        this.index = newIndex;
        }
      } 
    });
  }

  createIndex(): string {
    const itemsRef = this.database.list('/');
    var key = itemsRef.push( 0 ).key;
    this.updateIndex(key)
    return key;
  }

  getContador(): Observable<number>{
    return of(1);
  }

  increment(): void{
    this.database.object(this.index).set(++this.contador);
  }

  decrement(): void {
    this.database.object(this.index).set(--this.contador);
  }
}
