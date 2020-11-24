import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenremoviePageRoutingModule } from './genremovie-routing.module';

import { GenremoviePage } from './genremovie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenremoviePageRoutingModule
  ],
  declarations: [GenremoviePage]
})
export class GenremoviePageModule {}
