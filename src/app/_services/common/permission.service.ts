import { Injectable } from '@angular/core';
import { RestApiService } from '@_shared-modules/base/services/rest-api.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PermissionService extends RestApiService {
  httpRoute = '/permission';

  detailAccess(id: number) {
    return this._http.get(this.baseUrl + this.httpRoute + '/detail/' + id + '/access')
      .pipe(catchError(this._errorHandler.handleError));
  }
}
