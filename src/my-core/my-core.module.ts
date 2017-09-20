import { CADENAS_PIPES } from './pipes/cadenas.pipe';
// ng g module MyCore

// Añade la importacion del Optinal y SkipSelf que se usan más abajo
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  // Añade el CADENAS_PIPES (definido dentro del cadenas.pipe) al módulo de MyCore para que se pueda
  // usar en cualquier parte de la aplicación
  declarations: [CADENAS_PIPES],
  // Exporta para que sea visible en el resto de módulo que importen el módulo myCore
  exports: [CADENAS_PIPES]
})
export class MyCoreModule {

    // Con el autorelleno "a-" y seleccionamos a-cto-skip-shelf
    // con esto se evita que se cargue el módulo valias veces, lo hace singleton
    constructor( @Optional() @SkipSelf() parentModule: MyCoreModule) {

        if (parentModule) {
            const msg = `ModuleName has already been loaded.
                         Import ModuleName once, only, in the root AppModule.`;
            throw new Error(msg);
        }
    }

}
