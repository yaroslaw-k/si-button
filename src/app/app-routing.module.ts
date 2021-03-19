import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlayerComponent} from './main/components/player/player.component';
import {MainComponent} from './main/components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: PlayerComponent
  },
  {
    path: 'lead',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
