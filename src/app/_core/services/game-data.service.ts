import { Injectable } from '@angular/core';
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {
  selectedGame: Game;

  constructor() { }
}
