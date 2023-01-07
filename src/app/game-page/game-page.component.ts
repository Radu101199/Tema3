import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameDataService } from '../_core/services/game-data.service';
import { GamesService } from '../_core/services/games.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  gameName: string;
  gameDescription: string;

  // prettier ignore
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private gameDataService: GameDataService,
    private gamesService: GamesService,
  ) {
    // get id from the url and use it to receive game details
    this.getGameInfo(this.activatedRoute.snapshot.queryParams['gameId']);
  }

  ngOnInit(): void {
    // this.gameName = this.gameDataService.selectedGame.title;
    // this.gameDescription = this.gameDataService.selectedGame.description;
  }

  getGameInfo(id: number): void {
    this.gamesService.getGameInfo(id).subscribe({
      next: (response) => {
        this.gameName = response.title;
        this.gameDescription = response.description;
      }
    });
  }

  editGame(): void {
    // we also need to send the id together with the updated information
    const gameInfo = {
      id: this.activatedRoute.snapshot.queryParams['gameId'],
      title: this.gameName,
      description: this.gameDescription
    }
    // We don't write anything in the subscribe method because we only want to send the updated info to the database
    this.gamesService.updateGame(gameInfo).subscribe();
  }

  deleteGame(): void {
    const gameId = this.activatedRoute.snapshot.queryParams['gameId'];
    this.gamesService.deleteGame(gameId).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      }
    });
  }

}
