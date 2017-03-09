import { CommonService } from './../main/common.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { App2Component } from './app2.component';

@NgModule({
  declarations: [
    App2Component
  ],
  imports: [
    BrowserModule,
  ],
  providers: [CommonService],
  bootstrap: [App2Component]
})
export class App2Module { }
