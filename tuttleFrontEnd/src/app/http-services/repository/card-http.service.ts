import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class CardHttpService {

  constructor(private http: HttpClient) { }

  getCards() {
    const url = environment.serverPath + '/card';
    return this.http.get<any>(url);
  }


}
