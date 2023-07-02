import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormCadastroPageRoutingModule } from './register-form-routing.module';

import { FormCadastroPage } from './register-form.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormCadastroPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [FormCadastroPage]
})
export class FormCadastroPageModule { }
