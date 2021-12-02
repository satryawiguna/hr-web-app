import { Injectable } from '@angular/core';
import { RestApiService } from './../../shared-modules/base/services/rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class BankService extends RestApiService {
  httpRoute = '/bank';
}
