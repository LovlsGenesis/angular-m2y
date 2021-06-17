import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentRoutingModule, contentRoutes } from '../content/content-routing.module'

import { DatatableComponent } from '../datatable/datatable.component';
import { HomeComponent } from '../home/home.component'

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: DatatableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ContentRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
