import { Injectable } from '@angular/core';
import { apiListHierarchical, RestApiService } from 'src/app/shared-modules/base/services/rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class WorkUnitService extends RestApiService {
  httpRoute = '/work-unit';
  listHierarchical(company_id) {
    return apiListHierarchical(this, company_id);
  }
}
