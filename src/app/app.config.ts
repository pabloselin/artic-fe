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

import { InjectionToken } from '@angular/core';

export const USE_BASE_URL_INTERCEPTOR = new InjectionToken<boolean>(
  'Use Base URL',
);
const injector = Injector.create({
  providers: [
    {
      provide: USE_BASE_URL_INTERCEPTOR,
      useValue: true,
    },
  ],
});

const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const useBaseUrl = injector.get(USE_BASE_URL_INTERCEPTOR);
  console.log(useBaseUrl);
  if (!useBaseUrl) {
    return next(req);
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
