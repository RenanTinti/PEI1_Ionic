import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { schedulingPageRoutingModule } from './scheduling-routing.module';

import { schedulingPage } from './scheduling.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    schedulingPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [schedulingPage]
})
export class schedulingPageModule { }
