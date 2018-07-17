import { Component, OnInit } from '@angular/core';
import {CampaginStateService} from '../../client-services/campagin-state.service';
import {FilterStateService} from '../../client-services/filter-state.service';
import {Campagin} from '../../http-services/model/campagin/campagin';
import {CardStateService} from '../../client-services/card-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  filters = [];
  campaigns: Campagin[] = [];

  constructor(private campaignState: CampaginStateService, private filterState: FilterStateService, private cardState: CardStateService) { }

  ngOnInit() {
    this.campaignState.getCampagins()
      .then((campaigns: Campagin[]) => {
        this.campaigns = campaigns;
      });
    this.filterState.getFilters()
      .then((filters: string[]) => {
        this.filters = filters;
      });
  }

  filterCardsByStatus(status) {
    this.cardState.filterCardsByStatus(status);
  }

  filterCardsByCampaginId(id) {
    this.cardState.filterCardsById(id);
  }

}
