import { Injectable, ErrorHandler } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  constructor() {
  }

  handleError(error: any) {
    const message: any = (error.message) ? { message: error.message } :
      error.status ? { status: error.status, message: error.statusText } : { message: 'Internal server error' };

    return throwError(message);
  }
}
