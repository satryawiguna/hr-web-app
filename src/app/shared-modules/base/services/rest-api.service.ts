import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { merge } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { BaseUrl } from '../../../app.global';
import { ErrorHandlerService } from './../../../_services/errorHandler.service';
import { CompareSelectInstant } from './../../../_state/select-instant/select-instant.state';
import { addOptionAll, mapToRows, selectInstantDispatcher } from './../../reusableRxjsPipe';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(
    public _http: HttpClient,
    public _errorHandler: ErrorHandlerService,
    public _store?: Store,
  ) { }

  httpRoute: string;
  baseUrl = BaseUrl;

  list() {
    return this._http.get(this.baseUrl + this.httpRoute + '/list')
      .pipe(catchError(this._errorHandler.handleError));
  }

  listSearch(body: any) {
    return this._http.post(this.baseUrl + this.httpRoute + '/list-search', body)
      .pipe(catchError(this._errorHandler.handleError));
  }

  pageSearch(body: any) {
    return this._http.post(this.baseUrl + this.httpRoute + '/page-search', body)
      .pipe(catchError(this._errorHandler.handleError));
  }

  detail(id: number) {
    return this._http.get(this.baseUrl + this.httpRoute + '/detail/' + id)
      .pipe(catchError(this._errorHandler.handleError));
  }

  create(body: any) {
    return this._http.post(this.baseUrl + this.httpRoute + '/create', body)
      .pipe(catchError(this._errorHandler.handleError));
  }

  update(body: any) {
    return this._http.put(this.baseUrl + this.httpRoute + '/update', body)
      .pipe(catchError(this._errorHandler.handleError));
  }

  delete(id: number) {
    return this._http.delete(this.baseUrl + this.httpRoute + '/delete/' + id)
      .pipe(catchError(this._errorHandler.handleError));
  }

  deletes(ids: Array<number>) {
    const options: any = new HttpHeaders();
    options.body = { ids };
    return this._http.delete(this.baseUrl + this.httpRoute + '/deletes', options)
      .pipe(catchError(this._errorHandler.handleError));
  }

  activate(body: any) {
    return this._http.put(this.baseUrl + this.httpRoute + '/active', body)
      .pipe(catchError(this._errorHandler.handleError));
  }

  slug(name = '', company_id = '', title = '') {

    // slug is provided with title instead of name
    if (name === '' && title !== '') {
      return this._http.get(this.baseUrl + this.httpRoute + '/slug/' + company_id + '/' + title)
        .pipe(catchError(this._errorHandler.handleError));
    }

    // in some module need company_id as parameter
    if (company_id !== '') {
      return this._http.get(this.baseUrl + this.httpRoute + '/slug/' + company_id + '/' + name)
        .pipe(catchError(this._errorHandler.handleError));
    }

    // default case
    return this._http.get(this.baseUrl + this.httpRoute + '/slug/' + name)
      .pipe(catchError(this._errorHandler.handleError));
  }

  export(body: any) {
    return this._http.post(this.baseUrl + this.httpRoute + '/list-search/export', body)
      .pipe(catchError(this._errorHandler.handleError)).pipe(
        map((res: any) => res?.rows?.data?.file),
        switchMap(
          (name: string) => this.getDownloadLink(name)
        ),
      );
  }

  getDownloadLink(fileName: string) {
    const link = this.baseUrl + '/file/download?collection=STORAGE&file=' + fileName + '&action=delete';
    return this._http.get(link, { responseType: 'blob' });
  }

  saveBlob(blob, fileName) {
    const link = document.createElement('a');
    const url = window.URL.createObjectURL(blob);
    link.href = url;
    link.download = fileName;
    link.click();
    link.remove();
  }

  mediaUpload(body: FormData) {
    return this._http.post(this.baseUrl + '/file/upload', body, { reportProgress: true, observe: 'events' })
      .pipe(catchError(this._errorHandler.handleError));
  }

  mediaListSearch(body) {
    return this._http.post(this.baseUrl + '/media/list-search', body)
      .pipe(catchError(this._errorHandler.handleError));
  }

  mediaDelete(id) {
    return this._http.delete(this.baseUrl + '/file/delete/' + id)
      .pipe(catchError(this._errorHandler.handleError));
  }

  mediaDownload(collection, fileName) {
    const api = this.baseUrl + '/file/download?collection=' + collection + '&file=' + fileName;
    return this._http.get(api, { responseType: 'blob' as 'json' });
    // return this._http.get(this.baseUrl + '/file/download'+body)
    //     .pipe(catchError(this._errorHandler.handleError));
  }

  /**
   * @description subscribe to state & fetch select api in one syntax
   *
   * @param is_active active status
   * @param company_id company id (optional)
   */
  options$(is_active: '' | 0 | 1 = '', company_id: '' | number = '') {
    // tslint:disable-next-line: deprecation
    return merge(
      this.optionsFromState$(is_active),
      this.getOptionsFromAPI$(is_active, company_id),
    );
  }

  /**
   * @description subscribe to state
   *
   * @param is_active active status
   */
  optionsFromState$(is_active: '' | 0 | 1 = '') {
    const apiName = this.httpRoute.split('/')[1].split('-').join('_');
    return this._store.select(state => state.selectInstantState[apiName + is_active]);
  }

  /**
   * @description subscribe to fetch selection api & send the result to state
   *
   * @param is_active active status
   * @param company_id company id (optional)
   */
  getOptionsFromAPI$(is_active: '' | 0 | 1 = '', company_id: '' | number = '') {
    const apiName = this.httpRoute.split('/')[1].split('-').join('_');
    const params = company_id === '' ? { is_active } : { is_active, company_id };
    return this.listSearch(params).pipe(
      mapToRows,
      is_active === '' ? addOptionAll : tap(),
      selectInstantDispatcher(this._store, apiName + is_active),
      is_active === '' ? tap(
        (rows: any[]) => {
          rows = rows.filter(row => row.name !== 'All' && row.is_active === 1);
          this._store.dispatch(new CompareSelectInstant(apiName + 1, rows));
        }
      ) : tap(),
    );
  }
}

export const apiListHierarchical = (ctx: RestApiService, company_id) => {
  const params = new HttpParams().set('company_id', company_id.toString()).set('is_active', '1');
  return ctx._http.get(ctx.baseUrl + ctx.httpRoute + '/list-hierarchical', { params }).pipe(
    mapToRows,
    catchError(ctx._errorHandler.handleError),
  );
};
