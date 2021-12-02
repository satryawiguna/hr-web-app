import { Injectable } from '@angular/core';
import { RestApiService } from '@_shared-modules/base/services/rest-api.service';

@Injectable({
    providedIn: 'root'
})
export class GroupService extends RestApiService {


    httpRoute = '/group';
}
