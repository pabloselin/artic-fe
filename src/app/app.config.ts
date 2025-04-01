import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  HttpInterceptorFn,
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';

const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = 'https://api.artic.edu/api/v1/';
  const updatedRequest = req.clone({
    url: baseUrl + req.url,
  });
  return next(updatedRequest);
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch(), withInterceptors([baseUrlInterceptor])),
  ],
};
