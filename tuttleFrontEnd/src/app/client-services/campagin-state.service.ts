import { Injectable } from '@angular/core';
import {CampaignHttpService} from '../http-services/repository/campaign-http.service';
import {Campagin} from '../http-services/model/campagin/campagin';

@Injectable()
export class CampaginStateService {


  public campagins: Campagin[] = [];

  constructor(private campaginHttp: CampaignHttpService) { }

  getCampagins() {
    return new Promise((resolve, reject) => {
      this.campaginHttp.getCampagins()
        .subscribe((campagins: Campagin[]) => {
          this.campagins = campagins;
          resolve(this.campagins);
      });
    });
  }


}
