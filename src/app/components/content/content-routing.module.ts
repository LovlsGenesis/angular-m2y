import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DatatableComponent } from '../datatable/datatable.component';
import { HomeComponent } from '../home/home.component'

export const contentRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'users', component: DatatableComponent},
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(contentRoutes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
