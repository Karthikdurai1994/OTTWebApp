import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanguagemoviePage } from './languagemovie.page';

const routes: Routes = [
  {
    path: '',
    component: LanguagemoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanguagemoviePageRoutingModule {}
