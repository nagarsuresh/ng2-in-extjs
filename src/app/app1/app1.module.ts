import { RouterModule } from '@angular/router';
import { CommonService } from './../main/common.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from 'clarity-angular/clarity.module';
import { App1Component } from './app1.component';

@NgModule({
  declarations: [
    App1Component,
  ],
  imports: [
    BrowserModule,
    ClarityModule
  ],

  providers: [CommonService],
  bootstrap: [App1Component]
})
export class App1Module { }
