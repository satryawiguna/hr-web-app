import { Injectable } from '@angular/core';
import { RestApiService } from '@_shared-modules/base/services/rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class OfficeService extends RestApiService {
  httpRoute = '/office';
}
