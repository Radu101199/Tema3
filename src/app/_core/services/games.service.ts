import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private readonly serverUrl = 'http://localhost:3000';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getGames(): Observable<any> {
    return this.httpClient.get(`${this.serverUrl}/games`);
  }

  getGameInfo(id: number): Observable<any> {
    return this.httpClient.get(`${this.serverUrl}/games/${id}`);
  }

  addGame(gameInfo: any): Observable<any> {
    return this.httpClient.post(`${this.serverUrl}/games`, gameInfo);
  }

  updateGame(gameInfo: any): Observable<any> {
    return this.httpClient.put(`${this.serverUrl}/games/${gameInfo.id}`, gameInfo);
  }

  deleteGame(gameId: number): Observable<any> {
    return this.httpClient.delete(`${this.serverUrl}/games/${gameId}`);
  }
}
