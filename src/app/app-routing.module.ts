import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeCounterComponent } from './home-counter/home-counter.component';
import { ConfigFirebaseComponent } from './config-firebase/config-firebase.component';
import { ConfigContadorComponent } from './config-contador/config-contador.component';


const routes: Routes = [
  { path: '', redirectTo: '/contador', pathMatch: 'full' },
  {path:'contador', component: HomeCounterComponent},
  {path:'config/Firebase', component: ConfigFirebaseComponent},
  {path:'config/Local', component: ConfigContadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
