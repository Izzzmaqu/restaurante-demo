import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Angular 21 usa detección de cambios zoneless (sin Zone.js)
    // provideZoneChangeDetection era de versiones anteriores y requería Zone.js
    provideZonelessChangeDetection(),

    provideRouter(
      routes,
      withViewTransitions(),
      withInMemoryScrolling({ scrollPositionRestoration: 'top' })
    )
  ]
};
