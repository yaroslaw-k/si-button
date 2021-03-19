import {Component, OnInit} from '@angular/core';
import {gameType, teamColors} from '../../models/models';
import {ApiService} from '../../services/api.service';
import {SocketEventsService} from '../../services/socket-events.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  gameType: gameType;
  timeToEnd: number;
  answers: { team: string, answer }[] = [];
  answeringTeam: string;
  gamePhase: string;
  allTeams: { color: teamColors, pat: boolean, colorStyle?: string }[] = [
    {
      color: 'purple',
      pat: false,
    },
    {
      color: 'cyan',
      pat: false,
    },
    {
      color: 'yellow',
      pat: false,
    },
    // {
    //   color: 'white',
    //   pat: false,
    // },
  ];

  constructor(private api: ApiService, private se: SocketEventsService) {
    this.se.socketEventsSub.subscribe((e) => {
      this.gameType = e.gameType;
      this.gamePhase = e.gamePhase;
      this.answeringTeam = e.answeringTeam;
      this.answers = e.answered;
    });
  }


  ngOnInit(): void {
    this.api.getState().toPromise().then(res => {
      console.log(res);
      if (res.gameType){
        this.gameType = res.gameType;
        this.gamePhase = res.phase;
        this.answeringTeam = res.answeringTeam;
        this.answers = res.answered;
        console.log(this);
        if (res.teams){
          res.teams.forEach(t => this.allTeams.find(tt => tt.color === t).pat = true);
        }
      }
    });
  }

  startGame(type: gameType): void {
    this.gameType = type;
    this.api.startGame(type, this.allTeams.filter(t => t.pat).map(t => t.color)).toPromise().then(
      res => console.log(res)
    );
  }

  canStart(): boolean {
   return  this.allTeams.filter(t => t.pat).length > 1;
  }

  startRound(): void {
    this.api.startWaiting().toPromise().then(res => {console.log(res);});
  }


  answerResult(b: boolean): void {
    this.api.answerResult(b).toPromise().then(res => {console.log(res);});
  }


  stopGame(): void {
    this.api.stopGame().toPromise().then(res => {console.log(res);});
  }
}
