import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../http-services/model/card/Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('card') card: Card;

  constructor() { }

  ngOnInit() {
  }

}
