import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInteceptor implements HttpInterceptor {
  constructor(
    public store: Store
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let headers = new HttpHeaders({
      Accept: 'application/json',
    });

    const token: any = this.store.selectSnapshot((state) => state.authState.token);
    if (token) {
      headers = headers.set('Authorization', `${token.token_type} ${token.access_token}`);
    }

    request = request.clone({
      headers
    });

    return next.handle(request);
  }
}
