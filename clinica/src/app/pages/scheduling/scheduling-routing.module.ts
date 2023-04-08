import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { schedulingPage } from './scheduling.page';

const routes: Routes = [
  {
    path: '',
    component: schedulingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class schedulingPageRoutingModule {}
