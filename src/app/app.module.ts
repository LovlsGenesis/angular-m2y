// Angular's module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// App Components' Module
import { AppRoutingModule } from './app-routing.module';
import { FooterModule } from '../app/components/footer/footer.module';
import { HeaderModule } from '../app/components/header/header.module';
import { SidebarModule } from '../app/components/sidebar/sidebar.module';
import { ContentModule } from '../app/components/content/content.module';

// Component
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


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
    SidebarModule,
    FooterModule,
    HeaderModule,
    ContentModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
