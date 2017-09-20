// Importación de módulos del core de angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

// Importación del componente inicial
import { AppComponent } from './app.component';

// Importamos cada uno de los elementos (modulos, componentes y servicios)
// que se utlizarán dentro del módulo
import { MyCoreModule, LoggerService } from '../my-core/index';
import { MisDatosService } from './services/mis-datos.service';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [ // En las declaraciones se añaden los componentes
    AppComponent,
    HomeComponent,
    DemoComponent
  ],
  imports: [ // Define los módulos que se utilizarán en el módulos
    BrowserModule,
    FormsModule,
    MyCoreModule
  ],
  // Añade los servicios como providers
  providers: [LoggerService, MisDatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
