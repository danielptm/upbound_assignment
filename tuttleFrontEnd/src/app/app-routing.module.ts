import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {MainComponent} from './routes/main/main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent,
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
