import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

// Cargamos el módulo que hemos creado añadiendolo al inicio de la aplicación
import { MyCoreModule, LoggerService } from '../my-core/index';

import {MisDatosService} from './services/mis-datos.service';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MyCoreModule // Importa el módulo MyCoreModle
  ],
  providers: [LoggerService, MisDatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
