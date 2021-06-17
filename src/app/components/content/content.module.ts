import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser'

// Importando componente
import { ContentComponent } from './content.component'

// Importando Modulos
import { HomeModule } from '../home/home.module';
import { DatatableModule } from '../datatable/datatable.module';

// Importando as rotas
import { contentRoutes } from './content-routing.module'

// Importar o module para poder usar no html
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(contentRoutes),
    HomeModule,
    DatatableModule,
  ],
  exports: [ContentComponent],
  declarations: [ContentComponent],
  providers: [],
})

export class ContentModule {

}
