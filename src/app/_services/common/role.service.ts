import { Injectable } from '@angular/core';
import { RestApiService } from '@_shared-modules/base/services/rest-api.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleService extends RestApiService {
  httpRoute = '/role';

  detailPermission(id: number) {
    return this._http.get(this.baseUrl + this.httpRoute + '/detail/' + id + '/permission')
      .pipe(catchError(this._errorHandler.handleError));
  }
}
