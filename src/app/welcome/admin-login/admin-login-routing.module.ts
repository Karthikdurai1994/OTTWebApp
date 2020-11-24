import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLoginPage } from './admin-login.page';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path:'',
        component:AdminLoginPage
      },
      {
        path: 'admin-upload-movie',
        loadChildren: () => import('./admin-upload-video/admin-upload-video.module').then( m => m.AdminUploadVideoPageModule)
      },
      {
        path: 'adminmovie',
        loadChildren: () => import('./adminvideo/adminvideo.module').then( m => m.AdminvideoPageModule)
      }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminLoginPageRoutingModule {}
