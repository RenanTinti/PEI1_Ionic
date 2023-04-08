import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPessoaPageRoutingModule } from './lista-pessoa-routing.module';

import { ListaPessoaPage } from './lista-pessoa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPessoaPageRoutingModule,
  ],
  declarations: [ListaPessoaPage]
})
export class ListaPessoaPageModule {}
