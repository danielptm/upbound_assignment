import {Plan} from '../Plan/Plan';

export class Card {
  campaignId: string;
  cardTitle: string;
  cardDescription: string;
  primaryMediaurl: string;
  cardStartDate: Date;
  cardEndDate: Date;
  listOfPlans: Plan[];
}
