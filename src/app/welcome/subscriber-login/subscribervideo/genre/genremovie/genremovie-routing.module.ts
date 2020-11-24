import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenremoviePage } from './genremovie.page';

const routes: Routes = [
  {
    path: '',
    component: GenremoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenremoviePageRoutingModule {}
