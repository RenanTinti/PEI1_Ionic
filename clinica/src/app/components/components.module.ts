import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavbarComponent } from "./navbar/navbar.component";
import { TabsComponent } from "./tabs/tabs.component";

@NgModule({
    declarations: [
        NavbarComponent,
        TabsComponent,
    ],
    exports: [
        NavbarComponent,
        TabsComponent,
    ],
    imports: [
        CommonModule,
        IonicModule,
    ]
})
export class ComponentsModule { }