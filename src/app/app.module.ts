import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { DatatableModule } from '../app/datatable/datatable.module';
import { FooterModule } from '../app/footer/footer.module';
import { HeaderModule } from '../app/header/header.module';
import { SidebarModule } from '../app/sidebar/sidebar.module';
import { HomeModule } from '../app/home/home.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DatatableModule,
    SidebarModule,
    FooterModule,
    HeaderModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
