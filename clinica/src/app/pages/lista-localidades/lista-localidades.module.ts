import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaLocalidadesPageRoutingModule } from './lista-localidades-routing.module';

import { ListaLocalidadesPage } from './lista-localidades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaLocalidadesPageRoutingModule
  ],
  declarations: [ListaLocalidadesPage]
})
export class ListaLocalidadesPageModule {}
