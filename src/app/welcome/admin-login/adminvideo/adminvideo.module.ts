import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminvideoPageRoutingModule } from './adminvideo-routing.module';

import { AdminvideoPage } from './adminvideo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminvideoPageRoutingModule
  ],
  declarations: [AdminvideoPage]
})
export class AdminvideoPageModule {}
