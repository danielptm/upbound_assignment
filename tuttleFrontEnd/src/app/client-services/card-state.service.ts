import { Injectable } from '@angular/core';
import {CardHttpService} from '../http-services/repository/card-http.service';
import {Card} from '../http-services/model/card/Card';

@Injectable()
export class CardStateService {

  public cards: Card[] = [];

  constructor(private cardHttp: CardHttpService) { }


  getCards() {
    return new Promise( (resolve, reject) => {
      this.cardHttp.getCards()
        .subscribe((cards: Card[]) => {
          this.cards = cards;
          resolve(this.cards);
        });
    });
  }
}
