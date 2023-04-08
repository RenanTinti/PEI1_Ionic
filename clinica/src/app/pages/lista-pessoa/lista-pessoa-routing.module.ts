import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaPessoaPage } from './lista-pessoa.page';

const routes: Routes = [
  {
    path: '',
    component: ListaPessoaPage
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaPessoaPageRoutingModule {}
