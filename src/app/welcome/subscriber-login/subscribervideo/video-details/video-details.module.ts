import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoDetailsPageRoutingModule } from './video-details-routing.module';

import { VideoDetailsPage } from './video-details.page';
import { IonicRatingModule } from 'ionic4-rating';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoDetailsPageRoutingModule,
    IonicRatingModule 
  ],
  declarations: [VideoDetailsPage]
})
export class VideoDetailsPageModule {}
