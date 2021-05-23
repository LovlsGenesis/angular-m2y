import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentRoutingModule, contentRoutes } from './components/content/content-routing.module'
import { ContentComponent } from './components/content/content.component'

const routes: Routes = [
  {path: '', component: ContentComponent, children: contentRoutes}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ContentRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
