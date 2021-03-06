import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DatatableComponent } from '../datatable/datatable.component';
import { HomeComponent } from '../home/home.component'

export const contentRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: DatatableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(contentRoutes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
