import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
    declarations: [
        NavbarComponent,
    ],
    exports: [
        NavbarComponent,
    ],
    imports: [
        CommonModule,
        IonicModule,
    ]
})
export class ComponentsModule { }