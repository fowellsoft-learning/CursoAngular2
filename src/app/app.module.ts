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
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PERSONAS_COMPONENT } from './personas/personas.component';
import { PersonasViewModelService } from './personas/personas-view-model.service';

@NgModule({
  // En los declaration se añaden - componentes, pipes y directivas, lo que se usa en html
  declarations: [
    AppComponent,
    HomeComponent,
    DemoComponent,
    CalculadoraComponent,
    PERSONAS_COMPONENT,
  ],
  imports: [ // Importa los modulos que usarua este módulo
    BrowserModule,
    FormsModule,
    MyCoreModule
  ],
  // Servicios que usan en el módulo se pueden difinir en el módulo y seran visibles en todo el módulo o en el componente
  // y será visible sólo dentro del componente
  providers: [LoggerService, MisDatosService, PersonasViewModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
