import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriberLoginPage } from './subscriber-login.page';

const routes: Routes = [
  {
    path: '',
    children:[
      {path:'', component:SubscriberLoginPage},
      {
        path: 'subscribermovie',
        loadChildren: () => import('./subscribervideo/subscribervideo.module').then( m => m.SubscribervideoPageModule)
      }
    ]
  },
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriberLoginPageRoutingModule {}
