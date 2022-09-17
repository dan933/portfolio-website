import { Component, OnInit } from '@angular/core';
import { cardData } from 'src/assets/Data/overview-card-data';

interface ICard {
  title: string;
  subtitle: string;
  img: string;
  caption: string;
  routeLink: string;
  gitHubLink?: string;
  IsGitHubButton: boolean;
  IsDemoButton?: boolean;
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  cards: ICard[] = cardData;

  constructor() {}

  ngOnInit(): void {}
}
