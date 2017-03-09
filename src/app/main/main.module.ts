import { RouterModule } from '@angular/router';
import { CommonService } from './common.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    FormsModule,
    HttpModule
  ],
  providers: [CommonService],
  declarations: [MainComponent],
  bootstrap : [MainComponent]
})
export class MainModule {
  public ngDoBootstrap() { }
}