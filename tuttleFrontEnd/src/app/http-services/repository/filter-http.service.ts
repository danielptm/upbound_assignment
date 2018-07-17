import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class FilterHttpService {

  constructor(private http: HttpClient) { }

  getFilters() {
    const url = environment.serverPath + '/filter';
    return this.http.get<string []>(url);
  }

}
