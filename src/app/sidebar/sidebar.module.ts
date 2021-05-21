import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser'

import { SidebarComponent } from './sidebar.component'


import { AppComponent } from '../app.component'
import { HomeComponent } from '../home/home.component'

const routes: Routes = [
  // { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: AppComponent },
  { path: 'test', component: HomeComponent },
];


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [SidebarComponent],
  declarations: [SidebarComponent],
  providers: [],
})

export class SidebarModule {

}
