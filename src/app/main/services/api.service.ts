import {Injectable} from '@angular/core';
import {gameType, teamColors} from '../models/models';
import {Observable, of} from 'rxjs';
import {Socket} from 'ngx-socket-io';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = window.location.origin + '/api/';

  constructor(private http: HttpClient) {

  }

  startGame(type: gameType, teams: teamColors[]): Observable<any> {
    return this.http.post(this.apiUrl + 'start-game',
      {type, teams});
  }

  startWaiting(): Observable<any>{
    return this.http.post(this.apiUrl + 'start-waiting', {});
  }

  getState(): Observable<any> {
    return this.http.get(this.apiUrl + 'game-state');
  }

  makeAnswer(team: teamColors, answer?): Observable<any> {
    console.log('ma', team, answer)
    return this.http.post(this.apiUrl + 'make-answer', {
      team, answer
    });
  }

  answerResult(b: boolean): Observable<any> {
    return this.http.post(this.apiUrl + 'answer-result', {
      right: b
    });
  }

  stopGame(): Observable<any> {
    return this.http.post(this.apiUrl + 'stop-game', {});
  }
}
//   getState() {
//     const getSub = new Subject<boolean>();
//     this.http.get(this.apiUrl + 'get-state').toPromise().then(
//       (game: IGame) => {
//         this.gameSub.next(game);
//         if (this.game && this.game._id && this.socketState !== 'opened') {
//           this.openSocket();
//         }
//         getSub.next(true);
//       }
//     );
//     // for guard
//     return getSub;
//   }

//   createGame() {
//     this.http.post(this.apiUrl + 'create-game', {}).toPromise().then(
//       (game: IGame) => {
//         this.gameSub.next(game);
//         this.openSocket();
//       }
//     );
//   }
// }
