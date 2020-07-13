import { Component, OnInit, Input } from '@angular/core';
import { ContadorAbstract } from '../utils/ContadorAbstract';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home-counter',
  templateUrl: './home-counter.component.html',
  styleUrls: ['./home-counter.component.css']
})
export class HomeCounterComponent implements OnInit {
  contadorAtual: ContadorAbstract;

  ngOnInit(): void {
  }

  constructor( 
    public dataService: DataService
  ) {
//    this.contadorAtual = contadorFirebase;
  }

}
