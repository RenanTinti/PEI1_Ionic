import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { schedulingPageRoutingModule } from './scheduling-routing.module';

import { schedulingPage } from './scheduling.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    schedulingPageRoutingModule
  ],
  declarations: [schedulingPage]
})
export class schedulingPageModule {}
