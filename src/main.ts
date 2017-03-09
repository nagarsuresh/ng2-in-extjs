import { App2Module } from './app/app2/app2.module';
import { App1Module } from './app/app1/app1.module';
import { MainModule } from './app/main/main.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode, NgModuleRef, NgZone } from '@angular/core';
import { environment } from './environments/environment';

declare var globalObservable;

if (environment.production) {
  enableProdMode();
}

const platform = platformBrowserDynamic();
platform.bootstrapModule(MainModule);
//   .then((module: NgModuleRef<any>) => {
// });

if (globalObservable) {
  globalObservable.subscribe((id) => {
    switch (id) {
      case 'module1':
        platform['bootstrapModule'](App1Module); break;
      case 'module2':
        platform['bootstrapModule'](App2Module); break;
    }
  });
}  





