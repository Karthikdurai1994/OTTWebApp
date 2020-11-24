import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanguagemoviePageRoutingModule } from './languagemovie-routing.module';

import { LanguagemoviePage } from './languagemovie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanguagemoviePageRoutingModule
  ],
  declarations: [LanguagemoviePage]
})
export class LanguagemoviePageModule {}
