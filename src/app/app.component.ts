import { Component  } from '@angular/core';
import { ContadorService } from './contador.service'
import { ContadorAbstract } from './utils/ContadorAbstract';
import { ContadorFirebaseService } from './contador-firebase.service';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'simple-counter';
  contadorList: {[key: string]: ContadorAbstract} = {
    'Local': this.contador,
    'Firebase': this.contadorFirebase
  };
 // contadorAtual: ContadorAbstract;  

  constructor(
    private contador: ContadorService,
    private contadorFirebase: ContadorFirebaseService,
    public dataService: DataService,
    private router: Router) {
      dataService.contadorAtual = contador
  }

  goToConfig(): void{
    this.router.navigate(['/config/'+this.dataService.contadorAtual.getContadorType()]);
  }


  changeType(newType: ContadorAbstract): void {    
    this.dataService.contadorAtual = newType;
    if(this.router.url.startsWith('/config')) {
      this.goToConfig();
    }
  }

}
