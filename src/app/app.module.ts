import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

// Cargamos el módulo que hemos creado añadiendolo al inicio de la aplicación
import { MyCoreModule, LoggerService } from '../my-core/index';

import {MisDatosService} from './services/mis-datos.service';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonasViewModelService } from './personas/personas-view-model.service';

@NgModule({
  // En los declaration se añaden - componentes, pipes y directivas, lo que se usa en html
  declarations: [
    AppComponent,
    HomeComponent,
    DemoComponent,
    CalculadoraComponent,
    PersonasComponent,
  ],
  imports: [ // Importa los modulos que usarua este módulo
    BrowserModule,
    FormsModule,
    MyCoreModule // Importa el módulo MyCoreModle
  ],
  // Servicios que usan en el módulo se pueden difinir en el módulo y seran visibles en todo el módulo o en el componente
  // y será visible sólo dentro del componente
  providers: [LoggerService, MisDatosService, PersonasViewModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
