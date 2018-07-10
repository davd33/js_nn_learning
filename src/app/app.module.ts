import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManualNnComponent } from './manual-nn/manual-nn.component';
import { TensorflowYoutubeTutoComponent } from './tensorflow-youtube-tuto/tensorflow-youtube-tuto.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ManualNnComponent,
    TensorflowYoutubeTutoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'manual-nn',
        component: ManualNnComponent
      },
      {
        path: 'tensorflow/youtube-tutorial',
        component: TensorflowYoutubeTutoComponent
      },
      {
        path: '',
        redirectTo: '/manual-nn',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
