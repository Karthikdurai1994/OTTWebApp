import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanguagePage } from './language.page';

const routes: Routes = [
  {
    path: '',
    component: LanguagePage
  },
  {
    path: ':languageoption',
    loadChildren: () => import('./languagemovie/languagemovie.module').then( m => m.LanguagemoviePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanguagePageRoutingModule {}
