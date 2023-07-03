import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavbarComponent } from "./navbar/navbar.component";
import { TabsComponent } from "./tabs/tabs.component";
import { SchedulingsComponent } from "./schedulings/schedulings.component";

@NgModule({
    declarations: [
        NavbarComponent,
        TabsComponent,
        SchedulingsComponent,
    ],
    exports: [
        NavbarComponent,
        TabsComponent,
        SchedulingsComponent,
    ],
    imports: [
        CommonModule,
        IonicModule,
    ]
})
export class ComponentsModule { }