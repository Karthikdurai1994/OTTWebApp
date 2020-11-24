import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscribervideoPage } from './subscribervideo.page';

const routes: Routes = [
  {
    path: '',
   children:[
      {path:'', component: SubscribervideoPage},
      {
        path: 'movie/:movieID',
        loadChildren: () => import('./video-details/video-details.module').then( m => m.VideoDetailsPageModule)
      }
    ]
  },
  {
    path: 'genre',
    loadChildren: () => import('./genre/genre.module').then( m => m.GenrePageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./language/language.module').then( m => m.LanguagePageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscribervideoPageRoutingModule {}
