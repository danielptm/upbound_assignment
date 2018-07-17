import {Plan} from '../Plan/Plan';

export class Card {
  campaignId: string;
  cardTitle: string;
  cardDescription: string;
  primaryMediaUrl: string;
  cardStartDate: Date;
  cardEndDate: Date;
  listOfPlans: Plan[];
  currentWorkflow: string;
}
