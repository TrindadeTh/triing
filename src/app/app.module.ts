import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigContadorComponent } from './config-contador/config-contador.component';
import { ConfigFirebaseComponent } from './config-firebase/config-firebase.component';
import { HomeCounterComponent } from './home-counter/home-counter.component'


@NgModule({
  declarations: [
    AppComponent,
    ConfigContadorComponent,
    ConfigFirebaseComponent,
    HomeCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
