import { HttpInterceptorFn } from '@angular/common/http';

export const myHttpInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem('eToken');

  if (token) {
    req = req.clone({
      setHeaders: {
        token: token
      }
    });
  }

  return next(req);
};
