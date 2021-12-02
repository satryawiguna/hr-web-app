import { Injectable } from '@angular/core';
import { RestApiService } from '@_shared-modules/base/services/rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class AccessService extends RestApiService {
  httpRoute = '/access';
}
