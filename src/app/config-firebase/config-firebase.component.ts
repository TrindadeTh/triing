import { Component, OnInit } from '@angular/core';
import { ContadorFirebaseService } from '../contador-firebase.service';

@Component({
  selector: 'app-config-firebase',
  templateUrl: './config-firebase.component.html',
  styleUrls: ['./config-firebase.component.css']
})
export class ConfigFirebaseComponent implements OnInit {
  indexProvisorio: string;

  constructor(public contadorFirebase: ContadorFirebaseService) { 
   // this.indexProvisorio = contadorFirebase.index;
  }

  ngOnInit(): void {
  }

  updateIndex(): void{
    this.contadorFirebase.updateIndex(this.indexProvisorio);
  }

  createIndex(): void {
    console.log(this.contadorFirebase.createIndex());
  }
}
