import { Injectable } from '@angular/core';
import { RestApiService } from 'src/app/shared-modules/base/services/rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService extends RestApiService {
  httpRoute = '/work-experience';
}
