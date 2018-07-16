import { Component, OnInit, Input } from '@angular/core';
import {CardStateService} from '../../client-services/card-state.service';
import {Card} from '../../http-services/model/card/Card';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  cards: Card[] = [];

  constructor(private cardState: CardStateService) { }

  ngOnInit() {
    this.cardState.getCards()
      .then((cards: Card[]) => {
        this.cards = cards;
      });
  }
}
