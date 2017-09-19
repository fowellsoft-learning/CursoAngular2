import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Cargamos el módulo que hemos creado añadiendolo al inicio de la aplicación
import { MyCoreModule } from '../my-core/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyCoreModule // Importa el módulo MyCoreModle
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
