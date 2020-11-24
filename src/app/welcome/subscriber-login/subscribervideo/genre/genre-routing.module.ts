import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenrePage } from './genre.page';

const routes: Routes = [
  {
    path: '',
    component: GenrePage
  },
  {
    path: ':genreoption',
    loadChildren: () => import('./genremovie/genremovie.module').then( m => m.GenremoviePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenrePageRoutingModule {}
