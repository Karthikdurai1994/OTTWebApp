import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ImagepickerComponent } from './imagepicker/imagepicker.component';
import { CustompopoverComponent } from './custompopover/custompopover.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ImagepickerComponent, CustompopoverComponent],
    imports: [CommonModule,IonicModule,RouterModule],
    exports: [ImagepickerComponent, CustompopoverComponent]
})
export class SharedModule{

}