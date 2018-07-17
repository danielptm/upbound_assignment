import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Campagin} from '../model/campagin/campagin';


@Injectable()
export class CampaignHttpService {

  constructor(private http: HttpClient) { }

  getCampagins() {
    const url = environment.serverPath + '/campaign';
    return this.http.get<Campagin[]>(url);
  }

}
