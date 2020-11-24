import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminvideoPage } from './adminvideo.page';

const routes: Routes = [
  {
    path: '',
    component: AdminvideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminvideoPageRoutingModule {}
