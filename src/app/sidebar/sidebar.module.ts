import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar.component'
import { BrowserModule } from '@angular/platform-browser'


@NgModule({
  imports: [BrowserModule],
  exports: [SidebarComponent],
  declarations: [SidebarComponent],
  providers: [],
})

export class SidebarModule {

}
