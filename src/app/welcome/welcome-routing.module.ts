import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomePage } from './welcome.page';

const routes: Routes = [
  {
    path: '',
    children:[
      {
       path:'',
       component: WelcomePage
      },
      {
        path: 'adminLogin',
        loadChildren: ()=> import("./admin-login/admin-login.module").then(m=>m.AdminLoginPageModule)
      }, 
      {
        path: 'subscriberLogin',
        loadChildren: ()=> import("./subscriber-login/subscriber-login.module").then(m=>m.SubscriberLoginPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomePageRoutingModule {}
