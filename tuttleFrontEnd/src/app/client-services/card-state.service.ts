import { Injectable } from '@angular/core';
import {CardHttpService} from '../http-services/repository/card-http.service';
import {Card} from '../http-services/model/card/Card';
import {SubjectSubscription} from 'rxjs/SubjectSubscription';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CardStateService {

  cardSubject = new Subject<Card[]>();

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

  filterCardsById(id) {
    if (id === 'all') {
      this.cardSubject.next(this.cards);
    }else {
      const filteredCards = [...this.cards.filter((card) => card.campaignId === id)];
      this.cardSubject.next(filteredCards);
    }
  }

  filterCardsByStatus(status){
    if(status === 'all') {
      this.cardSubject.next(this.cards);
    }else {
      const filteredCards = [... this.cards.filter((card) => card.currentWorkflow === status)];
      this.cardSubject.next(filteredCards);
    }
  }

  getCardsAsObservable(){
    return this.cardSubject.asObservable();
  }

}
