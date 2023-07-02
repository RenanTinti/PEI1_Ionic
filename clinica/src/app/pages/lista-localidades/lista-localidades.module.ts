import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaLocalidadesPageRoutingModule } from './lista-localidades-routing.module';

import { ListaLocalidadesPage } from './lista-localidades.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaLocalidadesPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ListaLocalidadesPage]
})
export class ListaLocalidadesPageModule { }
