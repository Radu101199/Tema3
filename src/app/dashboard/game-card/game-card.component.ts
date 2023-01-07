import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent implements OnInit {
  @Input() game: any;
  @Output() clickedMore = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  navigateToGamePage() {
    this.clickedMore.emit();
  }
}
