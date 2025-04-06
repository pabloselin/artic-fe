import {
  ApplicationConfig,
  inject,
  Injector,
  provideZoneChangeDetection,
} from '@angular/core';
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
  if (req.url.startsWith('@internal')) {
    const internalReq = req.clone({
      url: req.url.replace('@internal', ''),
    });
    return next(internalReq);
  }

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
    provideImgixLoader('https://www.artic.edu/iiif/2/'),
    provideHttpClient(withFetch(), withInterceptors([baseUrlInterceptor])),
  ],
};
