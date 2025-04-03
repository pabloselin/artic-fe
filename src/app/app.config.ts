import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  HttpInterceptorFn,
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { provideImgixLoader } from '@angular/common';

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
    provideImgixLoader('https://artic-web.imgix.net'),
    provideHttpClient(withFetch(), withInterceptors([baseUrlInterceptor])),
  ],
};
