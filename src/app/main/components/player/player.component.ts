import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {gameType, teamColors} from '../../models/models';
import {SocketEventsService} from '../../services/socket-events.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  gameType: gameType;
  timeToEnd: number;
  answers: { team: string, answer }[];
  answeringTeam: string;
  gamePhase: string;
  selectedTeam: teamColors;
  teams: teamColors[];
  form: FormGroup = new FormGroup({
    myAnswer: new FormControl(null)
  });


  constructor(private api: ApiService, private se: SocketEventsService) {
    this.se.socketEventsSub.subscribe((e) => {
      this.gameType = e.gameType;
      this.gamePhase = e.gamePhase;
      this.answeringTeam = e.answeringTeam;
      this.teams = e.teams;
      this.answers = e.answered;
    });
  }

  ngOnInit(): void {
    this.api.getState().toPromise().then(res => {
      console.log(res);
      if (res.gameType){
        this.gameType = res.gameType;
        this.gamePhase = res.phase;
        this.teams = res.teams;
        this.answers = res.answered;
      }
    });
  }

  selectTeam(team): void{
    this.selectedTeam = team;
  }

  canAnswerSI(): boolean {
    return this.selectedTeam && (this.gamePhase === 'waiting');
  }

  makeAnswer(): void {
    this.api.makeAnswer(this.selectedTeam, this.form.getRawValue().myAnswer).toPromise().then();
    this.form.reset({});
  }

  canAnswerCHGK(): boolean {
    return this.selectedTeam && (this.gamePhase === 'waiting')  && this.answers.every(a => a.team !== this.selectedTeam);;
  }

  canAnswerBrain(): boolean {
    return this.selectedTeam && (this.gamePhase === 'waiting');
  }
}
