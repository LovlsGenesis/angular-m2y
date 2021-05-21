// Angular's module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// App Components' Module
import { AppRoutingModule } from './app-routing.module';
import { DatatableModule } from '../app/components/datatable/datatable.module';
import { FooterModule } from '../app/components/footer/footer.module';
import { HeaderModule } from '../app/components/header/header.module';
import { SidebarModule } from '../app/components/sidebar/sidebar.module';
import { HomeModule } from '../app/components/home/home.module';

// Component
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DatatableModule,
    SidebarModule,
    FooterModule,
    HeaderModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
