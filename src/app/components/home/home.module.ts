import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component'

import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  imports: [NgxEchartsModule.forRoot({
    echarts: () => import('echarts')
  })],
  exports: [HomeComponent],
  providers: [],
  declarations: [HomeComponent],
})

export class HomeModule {

}
