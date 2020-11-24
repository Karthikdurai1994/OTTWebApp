import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminUploadVideoPageRoutingModule } from './admin-upload-video-routing.module';

import { AdminUploadVideoPage } from './admin-upload-video.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminUploadVideoPageRoutingModule,
    SharedModule
  ],
  declarations: [AdminUploadVideoPage]
})
export class AdminUploadVideoPageModule {}
