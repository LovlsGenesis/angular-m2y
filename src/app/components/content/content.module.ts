import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser'

import { ContentComponent } from './content.component'

import { HomeModule } from '../home/home.module';
import { DatatableModule } from '../datatable/datatable.module';


import { AppComponent } from '../../app.component'
import { HomeComponent } from '../home/home.component'

const routes: Routes = [
  // { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: AppComponent },
  { path: 'test', component: HomeComponent },
];


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HomeModule,
    DatatableModule
  ],
  exports: [ContentComponent],
  declarations: [ContentComponent],
  providers: [],
})

export class ContentModule {

}
