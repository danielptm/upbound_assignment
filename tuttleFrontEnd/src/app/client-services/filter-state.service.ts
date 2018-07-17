import { Injectable } from '@angular/core';
import {FilterHttpService} from '../http-services/repository/filter-http.service';


@Injectable()
export class FilterStateService {

  public filters = [];

  constructor(private filter: FilterHttpService) { }

  getFilters() {
    return new Promise((resolve, reject) => {
      this.filter.getFilters()
        .subscribe((res: string[]) => {
          this.filters = res;
          resolve(this.filters);
        });
    });
  }


}
