import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

//source https://stackblitz.com/edit/angular-rw7xf4?file=src%2Fapp%2Fapp.component.css,src%2Fapp%2Fapp.component.html,src%2Fapp%2Fapp.component.ts
export class OverviewComponent implements OnInit {
  cards: ICard[] = cardData;
  @ViewChild('aboutMeVideo') myVideo!: ElementRef;
  isPlay = false;

  constructor() {}

  ngOnInit(): void { }

  toggleVideo() {
    console.log(this.myVideo.nativeElement)
    if (this.isPlay) {
      this.myVideo.nativeElement.pause();
    } else {
      this.myVideo.nativeElement.play();
    }
    this.isPlay = !this.isPlay;

  }
}
