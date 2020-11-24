import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscriberLoginPageRoutingModule } from './subscriber-login-routing.module';

import { SubscriberLoginPage } from './subscriber-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriberLoginPageRoutingModule
  ],
  declarations: [SubscriberLoginPage]
})
export class SubscriberLoginPageModule {}
