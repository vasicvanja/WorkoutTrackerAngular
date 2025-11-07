import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideNgToast } from 'ng-angular-popup';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',  // scrolls to top on navigation
        anchorScrolling: 'enabled' // enables anchor (#id) scrolling
      })
    ),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    provideNgToast({
      duration: 2500,
      position: 'toaster-top-center',
      enableAnimations: true,
      dismissible: true,
      showIcon: true,
      maxToasts: 1
    })
  ]
};
