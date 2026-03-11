// Este archivo arranca toda la aplicación
// En Angular 21 la clase se llama App, no AppComponent
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig).catch(err => console.error(err));
